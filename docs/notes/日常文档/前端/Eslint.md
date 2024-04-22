# Eslint

## eslint如何在命令行中控制不检查哪些目录

1. **通过 `--ignore-pattern` 选项:**

   使用 `--ignore-pattern` 选项可以指定一个正则表达式模式，匹配的文件和目录将被忽略。例如，如果你希望忽略 `node_modules` 目录，可以运行：

   ```
   basheslint --ignore-pattern 'node_modules/*' .
   ```

   这将在当前目录（`.`）下运行 ESLint，但会忽略 `node_modules` 目录。

2. **通过 `.eslintignore` 文件:**

   你可以在项目的根目录下创建一个名为 `.eslintignore` 的文件，列出要忽略的文件和目录。例如：

   ```
   node_modules/
   build/
   dist/
   ```

   然后在运行 `eslint` 命令时，它将根据 `.eslintignore` 文件来忽略指定的文件和目录。

3. **通过 `--ignore-path` 选项:**

   使用 `--ignore-path` 选项可以指定一个包含要忽略文件和目录的文件的路径。例如：

   ```
   basheslint --ignore-path .eslintignore .
   ```

   这里假设你的 `.eslintignore` 文件位于项目根目录。

4. **通过 `--ignore` 选项:**

   `--ignore` 选项允许你直接指定要忽略的文件和目录，而不使用 `.eslintignore` 文件。例如：

   ```
   basheslint --ignore 'node_modules/*' .
   ```

   这将在当前目录下运行 ESLint，但会忽略 `node_modules` 目录。