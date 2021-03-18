### 一个Tab

工单管理

住户审批

报事报修

投诉建议

![image-20210316090205757](C:\Users\程童辉\AppData\Roaming\Typora\typora-user-images\image-20210316090205757.png)

1. 添加数据大屏链接——完成
2. 住户审批页面状态切换



1. 短信验证登录bug（完成）
2. 住户审批前后台，
   1. 初始化函数（完成），
   2. 通过拒绝理由弹框（完成），
   3. 数据加载时的遮罩层，
   4. 分页
3. 住户审批有bug（完成），
4. 物业人员管理
   1. 编辑操作的数据回调填充，打通后端数据
   2. 删除
   3. 新建物业人员打通后端

http://localhost:7001/community/account/loginSms?

mobile=FvUA1gCRdZwsP9MI7nGKE8Yzrk7dgstlEsgtgMxCMpZtAwuYX9bYyg1QbI1gjj%2B222Zv7PgegtbN55ALs9lxqiJClk01tLqfviOB8dSatAmNyjyoR1da8SJ5pL68MXAhy0Ou28COu9XaFPdnsIUwioxLKFCmY5vK02dIGveuG6E%3D&

verifycode=123123







[父子组件传值](https://www.cnblogs.com/shengnan-2017/p/10419050.html)

https://blog.csdn.net/lander_xiong/article/details/79018737?utm_medium=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-2.control&dist_request_id=1328666.9273.16159762534572049&depth_1-utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-2.control

工单管理下的住户审批功能结束，人员管理下的物业人员管理操作功能结束，

1. 短信验证登录bug（完成）
2.  住户审批前后台
3.  通过拒绝理由弹框（完成)
   1.  数据加载时的遮罩层，   4. 
   2. 分页 3. 
   3. 
   4. 住户审批有bug（完成）， 4. 物业人员管理   1. 编辑操作的数据回调填充，打通后端数据   2. 删除   3. 新建物业人员打通后端
1. 短信验证登录bug解决
2. 住户审批操作
   1. 审核通过、拒绝请求完成
3. 物业人员管理
   1. 编辑修改操作完成
   2. 删除操作完成
4. 待完成：物业人员管理下的新增模块



1. 物业人员管理下的新增模块（完成）
2. 分页：待完成



前端进度：未完成的

1. 条件查询，分页，
2. 重置（完成）
3. 短信验证bug
4. 物业人员管理编辑请求报400（解决）
5. 整体页面体验感很差，但是数据基本通了
6. 这两天的问题总结
7. 更新teambition

http://localhost:7001

http://localhost:7001

```java
@ApiOperation("工单概况")
@ApiOperationLogger(value = "工单概况")
@GetMapping("selectStatistics")
public Result<String, Object> selectStatistics(@RequestParam("orderType") Integer orderType) {
    if(orderType<1||orderType>2){
        return Result.error(ResultCode.PARAMETER_ILLEGAL, "关键参数错误");
    }
    return service.selectStatistics(getToken().getCommunityUuid(), orderType);
}
```

6214 8355 1849 6839

合肥分行马鞍山路支行