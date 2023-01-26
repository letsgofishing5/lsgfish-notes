

### 查询

#### 根据关联表条件查询

```go
//根据 Join 预加载对 Meta 关联的表进行条件查询，关联表如果查询不到对应数据，主表也查不到数据
models.DB.Joins("Meta").Where("Meta.title like ?", "%"+title+"%").Offset(offset).Limit(pageSize).Find(&router).Offset(-1).Limit(-1).Count(&total)
```

#### 根据主表查询关联表

```go
//通过Preload预加载所有的关联信息
models.DB.Preload("Meta").Where("id = ?", id).Find(&router)
```



### 删除

#### 删除数据同时中间表数据也一并删除

```go
type Access struct {
	Id       int       `json:"id" gorm:"primaryKey;autoIncrement:true"`
	Name     string    `json:"name" gorm:"type:varchar(15)"`
	Link     string    `json:"link" gorm:"type:varchar(255)"`
	Type     int       `json:"type" gorm:"type:int"`
	Roles    []Role    `gorm:"many2many:oms_role_access_relation;"`
	Children []*Access `json:"children" gorm:"-"`
	Router   []Router  `gorm:"many2many:oms_router_access_relation"`
	GormHock
}
func delete(){
    //可以在删除记录时通过Select来删除具有has one、has many、many2many关系的记录
    models.DB.Select("Router").Delete(&acc)
}
```



### 修改

#### 一并修改关联表

```go
models.DB.Session(&gorm.Session{FullSaveAssociations: true}).Save(&router)
```

#### 修改中间表数据

```go
//先查出主表（router）和关联表（Access）信息，然后将查询到的信息替换（Replace）掉旧数据（access）
models.DB.Model(&router).Association("Access").Replace(&access)
```



## 常用配置



