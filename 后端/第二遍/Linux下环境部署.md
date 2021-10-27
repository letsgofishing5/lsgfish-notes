### 配置jdk

1. 压缩包放到 opt/ 目录下

2. 解压

3. 在 /etc/profile.d 目录下创建 my_env.sh 文件

4. 在 my_env.sh 文件中配置 JAVA_HOME 环境变量

   ```
   #JAVA_HOME
   JAVA_HOME=/opt/jdk包名
   PATH=$PATH:$JAVA_HOME
   export PATH JAVA_HOME
   ```

5. 执行 source  /etc/profile.d/my_env.sh 是 环境变量立即生效，如果不生效立即重启Xshell