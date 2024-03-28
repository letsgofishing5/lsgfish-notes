## Rollup

## 基础配置文件

```ts
export default {
  external: ["vue"],//排除第三方依赖，不参与打包结果
  input: "src/index.ts",//入口文件
  output: [//输出
    {
      preserveModules: true,//保留原始的目录结构
      preserveModulesRoot: "src",//
      format: "esm",
      entryFileNames: "[name].mjs",
      dir: "dist/es",
    },
    {
      preserveModules: true,
      format: "cjs",
      entryFileNames: "[name].cjs",
      preserveModulesRoot: "src",
      dir: "dist/cs",
      exports: "named",
    },
  ],
}
```

