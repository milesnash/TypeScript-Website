define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createURLQueryWithCompilerOptions = exports.getCompilerOptionsFromParams = exports.getDefaultSandboxCompilerOptions = void 0;
    /**
     * These are the defaults, but they also act as the list of all compiler options
     * which are parsed in the query params.
     */
    function getDefaultSandboxCompilerOptions(config, monaco) {
        const settings = {
            noImplicitAny: true,
            strictNullChecks: !config.useJavaScript,
            strictFunctionTypes: true,
            strictPropertyInitialization: true,
            strictBindCallApply: true,
            noImplicitThis: true,
            noImplicitReturns: true,
            noUncheckedIndexedAccess: false,
            // 3.7 off, 3.8 on I think
            useDefineForClassFields: false,
            alwaysStrict: true,
            allowUnreachableCode: false,
            allowUnusedLabels: false,
            downlevelIteration: false,
            noEmitHelpers: false,
            noLib: false,
            noStrictGenericChecks: false,
            noUnusedLocals: false,
            noUnusedParameters: false,
            esModuleInterop: true,
            preserveConstEnums: false,
            removeComments: false,
            skipLibCheck: false,
            checkJs: config.useJavaScript,
            allowJs: config.useJavaScript,
            declaration: true,
            importHelpers: false,
            experimentalDecorators: true,
            emitDecoratorMetadata: true,
            moduleResolution: monaco.languages.typescript.ModuleResolutionKind.NodeJs,
            target: monaco.languages.typescript.ScriptTarget.ES2017,
            jsx: monaco.languages.typescript.JsxEmit.React,
            module: monaco.languages.typescript.ModuleKind.ESNext,
        };
        return Object.assign(Object.assign({}, settings), config.compilerOptions);
    }
    exports.getDefaultSandboxCompilerOptions = getDefaultSandboxCompilerOptions;
    /**
     * Loop through all of the entries in the existing compiler options then compare them with the
     * query params and return an object which is the changed settings via the query params
     */
    const getCompilerOptionsFromParams = (options, params) => {
        const urlDefaults = Object.entries(options).reduce((acc, [key, value]) => {
            if (params.has(key)) {
                const urlValue = params.get(key);
                if (urlValue === "true") {
                    acc[key] = true;
                }
                else if (urlValue === "false") {
                    acc[key] = false;
                }
                else if (!isNaN(parseInt(urlValue, 10))) {
                    acc[key] = parseInt(urlValue, 10);
                }
            }
            return acc;
        }, {});
        return urlDefaults;
    };
    exports.getCompilerOptionsFromParams = getCompilerOptionsFromParams;
    // Can't set sandbox to be the right type because the param would contain this function
    /** Gets a query string representation (hash + queries) */
    const createURLQueryWithCompilerOptions = (sandbox, paramOverrides) => {
        const compilerOptions = sandbox.getCompilerOptions();
        const compilerDefaults = sandbox.compilerDefaults;
        const diff = Object.entries(compilerOptions).reduce((acc, [key, value]) => {
            if (value !== compilerDefaults[key]) {
                // @ts-ignore
                acc[key] = compilerOptions[key];
            }
            return acc;
        }, {});
        // The text of the TS/JS as the hash
        const hash = `code/${sandbox.lzstring.compressToEncodedURIComponent(sandbox.getText())}`;
        let urlParams = Object.assign({}, diff);
        for (const param of ["lib", "ts"]) {
            const params = new URLSearchParams(location.search);
            if (params.has(param)) {
                // Special case the nightly where it uses the TS version to hardcode
                // the nightly build
                if (param === "ts" && (params.get(param) === "Nightly" || params.get(param) === "next")) {
                    urlParams["ts"] = sandbox.ts.version;
                }
                else {
                    urlParams["ts"] = params.get(param);
                }
            }
        }
        // Support sending the selection
        const s = sandbox.editor.getSelection();
        // TODO: when it's full
        if ((s && s.selectionStartLineNumber !== s.positionLineNumber) ||
            (s && s.selectionStartColumn !== s.positionColumn)) {
            urlParams["ssl"] = s.selectionStartLineNumber;
            urlParams["ssc"] = s.selectionStartColumn;
            urlParams["pln"] = s.positionLineNumber;
            urlParams["pc"] = s.positionColumn;
        }
        else {
            urlParams["ssl"] = undefined;
            urlParams["ssc"] = undefined;
            urlParams["pln"] = undefined;
            urlParams["pc"] = undefined;
        }
        if (sandbox.config.useJavaScript)
            urlParams["useJavaScript"] = true;
        if (paramOverrides) {
            urlParams = Object.assign(Object.assign({}, urlParams), paramOverrides);
        }
        if (Object.keys(urlParams).length > 0) {
            const queryString = Object.entries(urlParams)
                .filter(([_k, v]) => v !== undefined)
                .filter(([_k, v]) => v !== null)
                .map(([key, value]) => {
                return `${key}=${encodeURIComponent(value)}`;
            })
                .join("&");
            return `?${queryString}#${hash}`;
        }
        else {
            return `#${hash}`;
        }
    };
    exports.createURLQueryWithCompilerOptions = createURLQueryWithCompilerOptions;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGlsZXJPcHRpb25zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc2FuZGJveC9zcmMvY29tcGlsZXJPcHRpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7SUFLQTs7O09BR0c7SUFDSCxTQUFnQixnQ0FBZ0MsQ0FBQyxNQUFxQixFQUFFLE1BQWM7UUFDcEYsTUFBTSxRQUFRLEdBQW9CO1lBQ2hDLGFBQWEsRUFBRSxJQUFJO1lBQ25CLGdCQUFnQixFQUFFLENBQUMsTUFBTSxDQUFDLGFBQWE7WUFDdkMsbUJBQW1CLEVBQUUsSUFBSTtZQUN6Qiw0QkFBNEIsRUFBRSxJQUFJO1lBQ2xDLG1CQUFtQixFQUFFLElBQUk7WUFDekIsY0FBYyxFQUFFLElBQUk7WUFDcEIsaUJBQWlCLEVBQUUsSUFBSTtZQUN2Qix3QkFBd0IsRUFBRSxLQUFLO1lBRS9CLDBCQUEwQjtZQUMxQix1QkFBdUIsRUFBRSxLQUFLO1lBRTlCLFlBQVksRUFBRSxJQUFJO1lBQ2xCLG9CQUFvQixFQUFFLEtBQUs7WUFDM0IsaUJBQWlCLEVBQUUsS0FBSztZQUV4QixrQkFBa0IsRUFBRSxLQUFLO1lBQ3pCLGFBQWEsRUFBRSxLQUFLO1lBQ3BCLEtBQUssRUFBRSxLQUFLO1lBQ1oscUJBQXFCLEVBQUUsS0FBSztZQUM1QixjQUFjLEVBQUUsS0FBSztZQUNyQixrQkFBa0IsRUFBRSxLQUFLO1lBRXpCLGVBQWUsRUFBRSxJQUFJO1lBQ3JCLGtCQUFrQixFQUFFLEtBQUs7WUFDekIsY0FBYyxFQUFFLEtBQUs7WUFDckIsWUFBWSxFQUFFLEtBQUs7WUFFbkIsT0FBTyxFQUFFLE1BQU0sQ0FBQyxhQUFhO1lBQzdCLE9BQU8sRUFBRSxNQUFNLENBQUMsYUFBYTtZQUM3QixXQUFXLEVBQUUsSUFBSTtZQUVqQixhQUFhLEVBQUUsS0FBSztZQUVwQixzQkFBc0IsRUFBRSxJQUFJO1lBQzVCLHFCQUFxQixFQUFFLElBQUk7WUFDM0IsZ0JBQWdCLEVBQUUsTUFB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SSxDQUFDLEdBQUcsU0FBUyxDQUFBO1NBQzVCO1FBRUQsSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLGFBQWE7WUFBRSxTQUFTLENBQUMsZUFBZSxDQUFDLEdBQUcsSUFBSSxDQUFBO1FBRW5FLElBQUksY0FBYyxFQUFFO1lBQ2xCLFNBQVMsbUNBQVEsU0FBUyxHQUFLLGNBQWMsQ0FBRSxDQUFBO1NBQ2hEO1FBRUQsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDckMsTUFBTSxXQUFXLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUM7aUJBQzFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEtBQUssU0FBUyxDQUFDO2lCQUNwQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQztpQkFDL0IsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLEVBQUUsRUFBRTtnQkFDcEIsT0FBTyxHQUFHLEdBQUcsSUFBSSxrQkFBa0IsQ0FBQyxLQUFlLENBQUMsRUFBRSxDQUFBO1lBQ3hELENBQUMsQ0FBQztpQkFDRCxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUE7WUFFWixPQUFPLElBQUksV0FBVyxJQUFJLElBQUksRUFBRSxDQUFBO1NBQ2pDO2FBQU07WUFDTCxPQUFPLElBQUksSUFBSSxFQUFFLENBQUE7U0FDbEI7SUFDSCxDQUFDLENBQUE7SUFsRVksUUFBQSxpQ0FBaUMscUNBa0U3QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNhbmRib3hDb25maWcgfSBmcm9tIFwiLlwiXG5cbnR5cGUgQ29tcGlsZXJPcHRpb25zID0gaW1wb3J0KFwibW9uYWNvLWVkaXRvclwiKS5sYW5ndWFnZXMudHlwZXNjcmlwdC5Db21waWxlck9wdGlvbnNcbnR5cGUgTW9uYWNvID0gdHlwZW9mIGltcG9ydChcIm1vbmFjby1lZGl0b3JcIilcblxuLyoqXG4gKiBUaGVzZSBhcmUgdGhlIGRlZmF1bHRzLCBidXQgdGhleSBhbHNvIGFjdCBhcyB0aGUgbGlzdCBvZiBhbGwgY29tcGlsZXIgb3B0aW9uc1xuICogd2hpY2ggYXJlIHBhcnNlZCBpbiB0aGUgcXVlcnkgcGFyYW1zLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGVmYXVsdFNhbmRib3hDb21waWxlck9wdGlvbnMoY29uZmlnOiBTYW5kYm94Q29uZmlnLCBtb25hY286IE1vbmFjbykge1xuICBjb25zdCBzZXR0aW5nczogQ29tcGlsZXJPcHRpb25zID0ge1xuICAgIG5vSW1wbGljaXRBbnk6IHRydWUsXG4gICAgc3RyaWN0TnVsbENoZWNrczogIWNvbmZpZy51c2VKYXZhU2NyaXB0LFxuICAgIHN0cmljdEZ1bmN0aW9uVHlwZXM6IHRydWUsXG4gICAgc3RyaWN0UHJvcGVydHlJbml0aWFsaXphdGlvbjogdHJ1ZSxcbiAgICBzdHJpY3RCaW5kQ2FsbEFwcGx5OiB0cnVlLFxuICAgIG5vSW1wbGljaXRUaGlzOiB0cnVlLFxuICAgIG5vSW1wbGljaXRSZXR1cm5zOiB0cnVlLFxuICAgIG5vVW5jaGVja2VkSW5kZXhlZEFjY2VzczogZmFsc2UsXG5cbiAgICAvLyAzLjcgb2ZmLCAzLjggb24gSSB0aGlua1xuICAgIHVzZURlZmluZUZvckNsYXNzRmllbGRzOiBmYWxzZSxcblxuICAgIGFsd2F5c1N0cmljdDogdHJ1ZSxcbiAgICBhbGxvd1VucmVhY2hhYmxlQ29kZTogZmFsc2UsXG4gICAgYWxsb3dVbnVzZWRMYWJlbHM6IGZhbHNlLFxuXG4gICAgZG93bmxldmVsSXRlcmF0aW9uOiBmYWxzZSxcbiAgICBub0VtaXRIZWxwZXJzOiBmYWxzZSxcbiAgICBub0xpYjogZmFsc2UsXG4gICAgbm9TdHJpY3RHZW5lcmljQ2hlY2tzOiBmYWxzZSxcbiAgICBub1VudXNlZExvY2FsczogZmFsc2UsXG4gICAgbm9VbnVzZWRQYXJhbWV0ZXJzOiBmYWxzZSxcblxuICAgIGVzTW9kdWxlSW50ZXJvcDogdHJ1ZSxcbiAgICBwcmVzZXJ2ZUNvbnN0RW51bXM6IGZhbHNlLFxuICAgIHJlbW92ZUNvbW1lbnRzOiBmYWxzZSxcbiAgICBza2lwTGliQ2hlY2s6IGZhbHNlLFxuXG4gICAgY2hlY2tKczogY29uZmlnLnVzZUphdmFTY3JpcHQsXG4gICAgYWxsb3dKczogY29uZmlnLnVzZUphdmFTY3JpcHQsXG4gICAgZGVjbGFyYXRpb246IHRydWUsXG5cbiAgICBpbXBvcnRIZWxwZXJzOiBmYWxzZSxcblxuICAgIGV4cGVyaW1lbnRhbERlY29yYXRvcnM6IHRydWUsXG4gICAgZW1pdERlY29yYXRvck1ldGFkYXRhOiB0cnVlLFxuICAgIG1vZHVsZVJlc29sdXRpb246IG1vbmFjby5sYW5ndWFnZXMudHlwZXNjcmlwdC5Nb2R1bGVSZXNvbHV0aW9uS2luZC5Ob2RlSnMsXG5cbiAgICB0YXJnZXQ6IG1vbmFjby5sYW5ndWFnZXMudHlwZXNjcmlwdC5TY3JpcHRUYXJnZXQuRVMyMDE3LFxuICAgIGpzeDogbW9uYWNvLmxhbmd1YWdlcy50eXBlc2NyaXB0LkpzeEVtaXQuUmVhY3QsXG4gICAgbW9kdWxlOiBtb25hY28ubGFuZ3VhZ2VzLnR5cGVzY3JpcHQuTW9kdWxlS2luZC5FU05leHQsXG4gIH1cblxuICByZXR1cm4geyAuLi5zZXR0aW5ncywgLi4uY29uZmlnLmNvbXBpbGVyT3B0aW9ucyB9XG59XG5cbi8qKlxuICogTG9vcCB0aHJvdWdoIGFsbCBvZiB0aGUgZW50cmllcyBpbiB0aGUgZXhpc3RpbmcgY29tcGlsZXIgb3B0aW9ucyB0aGVuIGNvbXBhcmUgdGhlbSB3aXRoIHRoZVxuICogcXVlcnkgcGFyYW1zIGFuZCByZXR1cm4gYW4gb2JqZWN0IHdoaWNoIGlzIHRoZSBjaGFuZ2VkIHNldHRpbmdzIHZpYSB0aGUgcXVlcnkgcGFyYW1zXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRDb21waWxlck9wdGlvbnNGcm9tUGFyYW1zID0gKG9wdGlvbnM6IENvbXBpbGVyT3B0aW9ucywgcGFyYW1zOiBVUkxTZWFyY2hQYXJhbXMpOiBDb21waWxlck9wdGlvbnMgPT4ge1xuICBjb25zdCB1cmxEZWZhdWx0cyA9IE9iamVjdC5lbnRyaWVzKG9wdGlvbnMpLnJlZHVjZSgoYWNjOiBhbnksIFtrZXksIHZhbHVlXSkgPT4ge1xuICAgIGlmIChwYXJhbXMuaGFzKGtleSkpIHtcbiAgICAgIGNvbnN0IHVybFZhbHVlID0gcGFyYW1zLmdldChrZXkpIVxuXG4gICAgICBpZiAodXJsVmFsdWUgPT09IFwidHJ1ZVwiKSB7XG4gICAgICAgIGFjY1trZXldID0gdHJ1ZVxuICAgICAgfSBlbHNlIGlmICh1cmxWYWx1ZSA9PT0gXCJmYWxzZVwiKSB7XG4gICAgICAgIGFjY1trZXldID0gZmFsc2VcbiAgICAgIH0gZWxzZSBpZiAoIWlzTmFOKHBhcnNlSW50KHVybFZhbHVlLCAxMCkpKSB7XG4gICAgICAgIGFjY1trZXldID0gcGFyc2VJbnQodXJsVmFsdWUsIDEwKVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBhY2NcbiAgfSwge30pXG5cbiAgcmV0dXJuIHVybERlZmF1bHRzXG59XG5cbi8vIENhbid0IHNldCBzYW5kYm94IHRvIGJlIHRoZSByaWdodCB0eXBlIGJlY2F1c2UgdGhlIHBhcmFtIHdvdWxkIGNvbnRhaW4gdGhpcyBmdW5jdGlvblxuXG4vKiogR2V0cyBhIHF1ZXJ5IHN0cmluZyByZXByZXNlbnRhdGlvbiAoaGFzaCArIHF1ZXJpZXMpICovXG5leHBvcnQgY29uc3QgY3JlYXRlVVJMUXVlcnlXaXRoQ29tcGlsZXJPcHRpb25zID0gKHNhbmRib3g6IGFueSwgcGFyYW1PdmVycmlkZXM/OiBhbnkpOiBzdHJpbmcgPT4ge1xuICBjb25zdCBjb21waWxlck9wdGlvbnMgPSBzYW5kYm94LmdldENvbXBpbGVyT3B0aW9ucygpXG4gIGNvbnN0IGNvbXBpbGVyRGVmYXVsdHMgPSBzYW5kYm94LmNvbXBpbGVyRGVmYXVsdHNcbiAgY29uc3QgZGlmZiA9IE9iamVjdC5lbnRyaWVzKGNvbXBpbGVyT3B0aW9ucykucmVkdWNlKChhY2MsIFtrZXksIHZhbHVlXSkgPT4ge1xuICAgIGlmICh2YWx1ZSAhPT0gY29tcGlsZXJEZWZhdWx0c1trZXldKSB7XG4gICAgICAvLyBAdHMtaWdub3JlXG4gICAgICBhY2Nba2V5XSA9IGNvbXBpbGVyT3B0aW9uc1trZXldXG4gICAgfVxuXG4gICAgcmV0dXJuIGFjY1xuICB9LCB7fSlcblxuICAvLyBUaGUgdGV4dCBvZiB0aGUgVFMvSlMgYXMgdGhlIGhhc2hcbiAgY29uc3QgaGFzaCA9IGBjb2RlLyR7c2FuZGJveC5senN0cmluZy5jb21wcmVzc1RvRW5jb2RlZFVSSUNvbXBvbmVudChzYW5kYm94LmdldFRleHQoKSl9YFxuXG4gIGxldCB1cmxQYXJhbXM6IGFueSA9IE9iamVjdC5hc3NpZ24oe30sIGRpZmYpXG4gIGZvciAoY29uc3QgcGFyYW0gb2YgW1wibGliXCIsIFwidHNcIl0pIHtcbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKGxvY2F0aW9uLnNlYXJjaClcbiAgICBpZiAocGFyYW1zLmhhcyhwYXJhbSkpIHtcbiAgICAgIC8vIFNwZWNpYWwgY2FzZSB0aGUgbmlnaHRseSB3aGVyZSBpdCB1c2VzIHRoZSBUUyB2ZXJzaW9uIHRvIGhhcmRjb2RlXG4gICAgICAvLyB0aGUgbmlnaHRseSBidWlsZFxuICAgICAgaWYgKHBhcmFtID09PSBcInRzXCIgJiYgKHBhcmFtcy5nZXQocGFyYW0pID09PSBcIk5pZ2h0bHlcIiB8fCBwYXJhbXMuZ2V0KHBhcmFtKSA9PT0gXCJuZXh0XCIpKSB7XG4gICAgICAgIHVybFBhcmFtc1tcInRzXCJdID0gc2FuZGJveC50cy52ZXJzaW9uXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB1cmxQYXJhbXNbXCJ0c1wiXSA9IHBhcmFtcy5nZXQocGFyYW0pXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gU3VwcG9ydCBzZW5kaW5nIHRoZSBzZWxlY3Rpb25cbiAgY29uc3QgcyA9IHNhbmRib3guZWRpdG9yLmdldFNlbGVjdGlvbigpXG4gIC8vIFRPRE86IHdoZW4gaXQncyBmdWxsXG4gIGlmIChcbiAgICAocyAmJiBzLnNlbGVjdGlvblN0YXJ0TGluZU51bWJlciAhPT0gcy5wb3NpdGlvbkxpbmVOdW1iZXIpIHx8XG4gICAgKHMgJiYgcy5zZWxlY3Rpb25TdGFydENvbHVtbiAhPT0gcy5wb3NpdGlvbkNvbHVtbilcbiAgKSB7XG4gICAgdXJsUGFyYW1zW1wic3NsXCJdID0gcy5zZWxlY3Rpb25TdGFydExpbmVOdW1iZXJcbiAgICB1cmxQYXJhbXNbXCJzc2NcIl0gPSBzLnNlbGVjdGlvblN0YXJ0Q29sdW1uXG4gICAgdXJsUGFyYW1zW1wicGxuXCJdID0gcy5wb3NpdGlvbkxpbmVOdW1iZXJcbiAgICB1cmxQYXJhbXNbXCJwY1wiXSA9IHMucG9zaXRpb25Db2x1bW5cbiAgfSBlbHNlIHtcbiAgICB1cmxQYXJhbXNbXCJzc2xcIl0gPSB1bmRlZmluZWRcbiAgICB1cmxQYXJhbXNbXCJzc2NcIl0gPSB1bmRlZmluZWRcbiAgICB1cmxQYXJhbXNbXCJwbG5cIl0gPSB1bmRlZmluZWRcbiAgICB1cmxQYXJhbXNbXCJwY1wiXSA9IHVuZGVmaW5lZFxuICB9XG5cbiAgaWYgKHNhbmRib3guY29uZmlnLnVzZUphdmFTY3JpcHQpIHVybFBhcmFtc1tcInVzZUphdmFTY3JpcHRcIl0gPSB0cnVlXG5cbiAgaWYgKHBhcmFtT3ZlcnJpZGVzKSB7XG4gICAgdXJsUGFyYW1zID0geyAuLi51cmxQYXJhbXMsIC4uLnBhcmFtT3ZlcnJpZGVzIH1cbiAgfVxuXG4gIGlmIChPYmplY3Qua2V5cyh1cmxQYXJhbXMpLmxlbmd0aCA+IDApIHtcbiAgICBjb25zdCBxdWVyeVN0cmluZyA9IE9iamVjdC5lbnRyaWVzKHVybFBhcmFtcylcbiAgICAgIC5maWx0ZXIoKFtfaywgdl0pID0+IHYgIT09IHVuZGVmaW5lZClcbiAgICAgIC5maWx0ZXIoKFtfaywgdl0pID0+IHYgIT09IG51bGwpXG4gICAgICAubWFwKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgcmV0dXJuIGAke2tleX09JHtlbmNvZGVVUklDb21wb25lbnQodmFsdWUgYXMgc3RyaW5nKX1gXG4gICAgICB9KVxuICAgICAgLmpvaW4oXCImXCIpXG5cbiAgICByZXR1cm4gYD8ke3F1ZXJ5U3RyaW5nfSMke2hhc2h9YFxuICB9IGVsc2Uge1xuICAgIHJldHVybiBgIyR7aGFzaH1gXG4gIH1cbn1cbiJdfQ==