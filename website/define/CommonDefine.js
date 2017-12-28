// Dialog的視窗模式
var DIALOG_MODE = 
{
	ONEBTN : 1,
	TWOBTN : 2
};


// Socket Define
var SOCKET_DEF = 
{
	URL : "http://www.puhuei-dance.com/PHDServer/",
};

// Socket Service Type
var SERVICE_TYPE = 
{
	ALBUM : 0,
	JOIN : 1,
	ACTIVITY : 700,
};

// Socket Action Type
var ACTION_TYPE = 
{
	ALBUM_LIST : 0,
	ALBUM_DETAIL : 1,
	JOIN_COMPLETE : 2,
	JOIN_PERSONAL_PIC : 3,
	JOIN_LIFE_PIC : 4,
	JOIN_NORMAL : 5,

	ACTIVITY_QUERY : 750,
	ACTIVITY_QUERY_PIC_BY_ID : 756,
};

var LAN = 
{
	CH : 0,
	EN : 1,
	CN : 2,
};

// 登入者的類型 0：未登入 1：使用者 2:管理者
var UserType = 
{
	UnLogin : 0,
	User : 1,
	Manager : 2,
}