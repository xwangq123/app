drop SCHEMA  IF EXISTS  my_schema;
CREATE SCHEMA `my_schema` ;
use  my_schema;
DROP TABLE IF EXISTS PERSONNER;
/*==============================================================*/
/* TABLE: PERSONNER人员表                                       */
/*==============================================================*/
CREATE TABLE PERSONNER 
(
	ID 					INTEGER							NOT NULL AUTO_INCREMENT,
    LOGINID 			VARCHAR(20)						NOT NULL,#登录ID#
    PASSWORD			VARCHAR(50)						NOT NULL,#登录密码#
    NAME				VARCHAR(100)					NOT NULL,#登录人名称#
    CELLNUMBER			VARCHAR(20)						NULL,#登录人手机号码#
    PHOTO				VARCHAR(200)					NULL,#照片#
    EMAIL				VARCHAR(200)					NULL,#邮箱#
    STATUS				INTEGER							NOT NULL,#状态#
    REMARK				VARCHAR(200)					NULL,#备注#
    CREATORID			INTEGER 						NOT NULL,#创建人ID#
    CREATORNAME			VARCHAR(100)					NOT NULL,#创建人名称#
    CREATETIME			DATETIME						NOT NULL,#创建时间#
	MODIFIERID			INTEGER 						NULL,#修改人ID#
    MODIFIERNAME		VARCHAR(100)					NULL,#修改人名称#
    MODIFYTIME			DATETIME					    NULL,#修改时间#
	CONSTRAINT PK_PERSONNER PRIMARY KEY (ID)
);
DROP TABLE IF EXISTS ROLE;
/*==============================================================*/
/* TABLE: ROLE角色表                                       */
/*==============================================================*/
CREATE TABLE ROLE 
(
	ID 					INTEGER							NOT NULL AUTO_INCREMENT,
	NAME				VARCHAR(50)						NOT NULL,#角色名称#
    STATUS				INTEGER							NOT NULL,#状态-主数据状态#
	REMARK				VARCHAR(200)					NULL,#备注#
    CREATORID			INTEGER 						NOT NULL,#创建人ID#
    CREATORNAME			VARCHAR(100)					NOT NULL,#创建人名称#
    CREATETIME			DATETIME						NOT NULL,#创建时间#
	MODIFIERID			INTEGER 						NULL,#修改人ID#
    MODIFIERNAME		VARCHAR(100)					NULL,#修改人名称#
    MODIFYTIME			DATETIME					    NULL,#修改时间#
	CONSTRAINT PK_ROLE PRIMARY KEY (ID)
);
DROP TABLE IF EXISTS PAGE;
/*==============================================================*/
/* TABLE: PAGE窗体页面 系统分一级二级目录                       */
/*==============================================================*/
CREATE TABLE PAGE
(
	ID					INTEGER 						NOT NULL,
    PARENTID			INTEGER							NULL,#父节点ID#
    TYPE				INTEGER 						NOT NULL,#页面级别1系统2页面#
	PAGEID				VARCHAR(50)						NULL,#页面地址ID#
	NAME				VARCHAR(50)						NULL,#页面名称#
    DESCRIPTION			VARCHAR(200)					NULL,#页面描述#
    ICON				VARCHAR(100)					NULL,#页面图标#
	SEQUENCE 			INT								NOT NULL,#显示顺序#
    STATUS				INT								NOT NULL,#状态--基础数据状态#
	CONSTRAINT PK_PAGE PRIMARY KEY (ID)
);
DROP TABLE IF EXISTS ACTION;
/*==============================================================*/
/* TABLE: ACTION操作窗体			                            */
/*==============================================================*/
CREATE TABLE ACTION
(
	ID					INTEGER 						NOT NULL AUTO_INCREMENT,
	PAGEID				INTEGER							NOT NULL,#页面ID#
    OPERATIONUD			VARCHAR(50) 					NOT NULL,#操作ID#
    NAME				VARCHAR(50)						NOT NULL,#操作名称#
	STATUS				INT								NOT NULL,#状态--基础数据状态#
	CONSTRAINT PK_ACTION PRIMARY KEY (ID)
);
DROP TABLE IF EXISTS PERSONNERROLE;
/*==============================================================*/
/* TABLE: PERSONNERROLE人员角色表			                    */
/*==============================================================*/
CREATE TABLE PERSONNERROLE
(
	ID					INTEGER 						NOT NULL AUTO_INCREMENT,
	PERSONNERID			INTEGER 						NOT NULL,#人员ID
    ROLEID 				INTEGER							NOT NULL,#角色ID
	CONSTRAINT PK_PERSONNERROLE PRIMARY KEY (ID)
);
DROP TABLE IF EXISTS ROLENODE;
/*==============================================================*/
/* TABLE: ROLENODE角色节点          		                    */
/*==============================================================*/
CREATE TABLE ROLENODE
(
	ID					INTEGER 						NOT NULL AUTO_INCREMENT,
	NODEID				INTEGER 						NOT NULL,#节点ID
    ROLEID 				INTEGER							NOT NULL,#角色ID
	CONSTRAINT PK_ROLENODE PRIMARY KEY (ID)
);
DROP TABLE IF EXISTS NODE;
/*==============================================================*/
/* TABLE: NODE节点表											*/
/*==============================================================*/
CREATE TABLE NODE
(
	ID					INTEGER 						NOT NULL AUTO_INCREMENT,
	CATEGORYTYPE		INTEGER 						NOT NULL,#节点类型1 PAGE 2ACTION#
    CATEGORYID			INTEGER							NOT NULL,#目标ID PAGAID ACTIONID
    STATUS 				INTEGER							NOT NULL,#状态--基础数据状态#
	CONSTRAINT PK_NODE PRIMARY KEY (ID)
);

DROP TABLE IF EXISTS KEYVALUEITEM;
/*==============================================================*/
/* TABLE: KEYVALUEITEM字典项                                    */
/*==============================================================*/
CREATE TABLE KEYVALUEITEM (
   ID                   INTEGER                        NOT NULL  AUTO_INCREMENT,
   CATEGORY				VARCHAR(50)					   NOT NULL,#分类
   NAME                 VARCHAR(50)                    NULL,#名称
   CAPTION              VARCHAR(100)                   NULL,#说明
   KEYID                INT 	                       NULL,#键
   VALUE                VARCHAR(50)                    NULL,#值
   STATUS               INT                            NULL,#状态
   CONSTRAINT PK_KEYVALUEITEM PRIMARY KEY (ID)
);

DROP TABLE IF EXISTS ARTICLECATEGORY;
/*==============================================================*/
/* TABLE: ArticleCategory 文章类别                                    */
/*==============================================================*/
CREATE TABLE ARTICLECATEGORY (
   ID                   INTEGER                        NOT NULL  AUTO_INCREMENT,
   NAME                 VARCHAR(50)                    NOT NULL,#名称
   Article               INT 	                       NOT NULL,#文章
   STATUS               INT                            NOT NULL,#状态
   CREATETIME			DATETIME					   NOT NULL,
   CONSTRAINT PK_ARTICLECATEGORY PRIMARY KEY (ID)
);


DROP TABLE IF EXISTS ARTICLE;
/*==============================================================*/
/* TABLE: Article 文章类别                                    */
/*==============================================================*/
CREATE TABLE ARTICLE (
   ID                   INTEGER                        NOT NULL  AUTO_INCREMENT,
   TITLE                VARCHAR(200)                   NOT NULL,#标题
   READNUMBER			INT							   NOT NULL,#阅读数量
   SUMMARY				TEXT(400)                      NULL,#摘要
   CONTENT				TEXT   						   NOT NULL,#内容
   TYPE					VARCHAR(10)                    NOT NULL,#类型
   STATUS               INT                            NOT NULL,#状态
   CREATETIME			DATETIME					   NOT NULL,
   CREATENAME			VARCHAR(50)                    NOT NULL,
   MODIFIERNAME			VARCHAR(50)					   NULL,
   MODIFYTIME			DATETIME					   NULL,
   CONSTRAINT PK_ARTICLE PRIMARY KEY (ID)
);

DROP TABLE IF EXISTS ARTICLE;
/*==============================================================*/
/* TABLE: Article 文章类别关系                                    */
/*==============================================================*/
CREATE TABLE ARTICLECATEGORYRELATED (
   ID                   INTEGER                        NOT NULL  AUTO_INCREMENT,
   ARTICLEID		    INT 						   NOT NULL,
   ARTICLECATEGORYID    INT							   NOT NULL,
   CONSTRAINT PK_ARTICLECATEGORYRELATED PRIMARY KEY (ID)
);























