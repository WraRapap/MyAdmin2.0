(function()
{
    angular
        .module('PH')
        .controller('LessonController', LessonController);

    LessonController.$inject = ['$scope',  'UserData', 'LanMgr'];

    function GetQueryString(name)
    {
        var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if(r!=null)return  unescape(r[2]); return null;
    }
    function LessonController( $scope, UserData, LanMgr)
    {
        var self = this;
        $scope.typeID = '1';
        if(GetQueryString("typeID") ==null){
            $scope.typeID = '1';
        }
        else{
            $scope.typeID=GetQueryString("typeID");
        }

        $( 'html, body').animate({
            scrollTop: 0}, 0);

        $scope.lessonTitle = "";
        $scope.lessonIntro="";
        $scope.lessonSchedule="";

        $scope.typeTables = [
            {
                title : "幼兒律動",
                content : 	"透過富有創意的舞蹈動作及充滿節奏的律動音樂，啟發孩子豐富的想像力及" +
                "提高音樂節奏感，增加肢體的靈活運用，並同時使孩子體驗群體生活，培養" +
                "自信心。將遊戲融入舞蹈吸引孩子們的興趣，快樂的學習可以促進孩子們心" +
                "靈上的愉悅同時啟發孩子們的創造力、思考力，也為學齡前幼兒訓練肌力及" +
                "小肌肉群。",
            },
            {
                title : "芭蕾舞",
                content : 	"通過各種芭蕾舞基本功的訓練，對孩子的骨骼發育、形體都有好處，能夠糾" +
                "正不良姿態和形體，無論站姿還是坐姿，都能保持挺拔端莊。學習芭蕾同時" +
                "還可以改善氣質、增強自信，那是一種優雅、一種沉靜、一種由內而外的魅" +
                "力。",
            },
            {
                title : "現代舞",
                content : "現代舞是為了發現人類整個肢體的無限可能。現代舞有各種各樣的面部表情" +
                "、可以創造出千奇百怪的姿勢並且更能訓練平衡感及肢體張力。如果你喜歡" +
                "享受身體的動作與流暢的呼吸結合在一起，來跳現代舞吧！",
            },
            {
                title : "中國舞",
                content : "中國舞講究身韻、身法、技巧，是奠基在中華五千年的文明歷史之上，可細" +
                "分為古典舞、民俗舞及民間舞蹈。其中又透過國劇武功及身段的訓練，加強" +
                "了肌力的訓練與穩定性，更在動作中貫穿了提、沉、沖、靠、含、腆、移、" +
                "旁提的動律元素及手、眼、身、法、步的要求。是陽剛與柔媚並存的舞蹈訓" +
                "練。",
            },
            {
                title : "兒童街舞",
                content : "跳街舞可使小朋友注意力集中。動作是由各種走、跑、跳组合而成，極富變" +
                "化。街舞不僅具有一般有氧運動改善心肺功能、减少脂肪、增强肌肉彈性、" +
                "增强韌帶柔韌性的功效，還具有協調人體各部位肌肉群，塑造優美體態，提" +
                "高人體協調能力，陶冶美感的功能並增加全身的協調性。",
            },
            {
                title : "MV 舞蹈",
                content : "看著電視上偶像歌手又唱又跳的帥酷可愛模樣，想學又跟不上播放的速度嗎" +
                "？MV 舞蹈課程中，會將整首舞曲的動作分解，讓你和偶像一樣有魅力、自" +
                "信的完成一首舞蹈，歡迎大家跟著熟悉的旋律一起跳起來﹗一起動起來吧！",
            },
            {
                title : "成人瑜珈",
                content : "瑜珈是一門生理、心理和精神上的學問，瑜珈能讓你更了解自己的身體方式" +
                "，當不同的瑜珈姿勢設計組合成一連串的動作，就能讓身體每個生理、心理" +
                "受益，瑜珈是一個全身伸展、強化的運動，和其他運動不同的是必須有意識" +
                "的控制呼吸，透過呼吸慢慢體會能量的連結和肌群的強化、加強核心的穩定" +
                "性和強化，讓身心靈合而為一！",
            },
            {
                title : "成人有氧",
                content : "有氧運動的目的在於增強心肺耐力，長期堅持有氧運動能增加體內血紅蛋白" +
                "的數量、提高機體抵抗力、抗衰老、增強大腦皮層的工作效率和心肺功能、" +
                "增加脂肪消耗，同時防止動脈硬化、降低心腦血管疾病的發病率。快來跟我" +
                "們一起動一動吧！",
            },
            {
                title : "成人芭蕾",
                content : "現代都市人都是坐著工作，很少運動。芭蕾的基本動作中有不少肩背和手" +
                "臂的動作，特別適合辦公室的白領來鬆弛緊張的肩背。成人芭蕾的動作組" +
                "合以課程的音樂編制動作，節奏簡單清楚、易於把握，還可提升音樂節奏" +
                "感、提高身體協調能力。",
            },
            {
                title : "成人現代",
                content : "以芭蕾為基礎卻拋開芭蕾的制式化舞姿，配合呼吸及音樂節奏讓身體自由的" +
                "舞動，讓你在忙碌的生活中放鬆思緒、愉悅心情，與自己的身體親密對話。",
            },
        ];

        $scope.classTables = [
            {
                Column0: {text: "A教室", style:"className"},
                Column1: {text: "一", style:"classDate"},
                Column2: {text: "二", style:"classDate"},
                Column3: {text: "三", style:"classDate"},
                Column4: {text: "四", style:"classDate"},
                Column5: {text: "五", style:"classDate"},
                Column6: {text: "六", style:"classDate"},
                Column7: {text: "日", style:"classDate"},
            },
            {
                Column0: {text: "上<br>午", style:"classTime"},
                Column1: {text: "", style:"classNone"},
                Column2: {text: "", style:"classNone"},
                Column3: {text: "", style:"classNone"},
                Column4: {text: "", style:"classNone"},
                Column5: {text: "", style:"classNone"},
                Column6: {text: "9:00-12:00<br><br>兒童舞團<br>現代", style:"classChildDG"},
                Column7: {text: "9:00-12:00<br><br>兒童舞團<br>中國舞", style:"classChildDG"},
            },
            {
                Column0: {text: "下<br>午", style:"classTime classTimeUp"},
                Column1: {text: "", style:"classNone"},
                Column2: {text: "", style:"classNone"},
                Column3: {text: "14:00-15:00<br><br>成人中國舞<br><a href='teacher.htm?origin=6'>謝瑋庭</a>", style:"classDanceBL"},
                Column4: {text: "14:30-16:00<br><br>成人芭蕾<br><a href='teacher.htm?origin=4'>楊家琇</a>", style:"classDanceBL"},
                Column5: {text: "", style:"classNone"},
                Column6: {text: "14:00-17:00<br><br>兒童舞團<br>芭蕾", style:"classChildDG"},
                Column7: {text: "", style:"classNone"},
            },
            {
                Column0: {text: "", style:"classTime classTimeDown"},
                Column1: {text: "", style:"classNone"},
                Column2: {text: "", style:"classNone"},
                Column3: {text: "15:30-16:30<br><br>民間中國舞<br><a href='teacher.htm?origin=6'>謝瑋庭</a>", style:"classDanceAD"},
                Column4: {text: "", style:"classNone"},
                Column5: {text: "", style:"classNone"},
                Column6: {text: "", style:"classNone"},
                Column7: {text: "", style:"classNone"},
            },
            {
                Column0: {text: "晚<br>上", style:"classTime classTimeUp"},
                Column1: {text: "18:00-19:00<br><br>幼兒律動<br>(3-6歲)<br><a href='teacher.htm?origin=2'>林亞𦹃</a>", style:"classDanceAD"},
                Column2: {text: "18:00-19:30<br><br>進階芭蕾<br>(13歲以上)<br><a href='teacher.htm?origin=0'>趙文歆</a>", style:"classBaby"},
                Column3: {text: "18:00-19:00<br><br>幼兒律動<br>(3-6歲)<br><a href='teacher.htm?origin=2'>林亞𦹃</a>", style:"classDanceAD"},
                Column4: {text: "18:00-19:00<br><br>兒童街舞<br>(7-10歲)<br><a href='teacher.htm?origin=8'>蔡慰親</a>", style:"classDanceAD"},
                Column5: {text: "18:00-19:00<br><br>成人中國舞<br><a href='teacher.htm?origin=6'>謝瑋庭</a>", style:"classDanceBL"},
                Column6: {text: "", style:"classNone"},
                Column7: {text: "", style:"classNone"},
            },
            {
                Column0: {text: "", style:"classTime classTimeDown"},
                Column1: {text: "19:30-21:00<br><br>成人芭蕾<br><a href='teacher.htm?origin=0'>趙文歆</a>", style:"classDanceBL"},
                Column2: {text: "20:00-21:30<br><br>進階芭蕾<br>(硬鞋)<br><a href='teacher.htm?origin=1'>何宇平</a>", style:"classBaby"},
                Column3: {text: "19:30-20:30<br><br>成人瑜珈<br><a href='teacher.htm?origin=0'>趙文歆</a>", style:"classDanceBL"},
                Column4: {text: "19:30-20:30<br><br>武功<br><a href='teacher.htm?origin=5'>楊琇雯</a>", style:"classDanceAD"},
                Column5: {text: "19:30-21:00<br><br>初級中國舞<br>(7-9歲，以柔軟度為主)<br><a href='teacher.htm?origin=6'>謝瑋庭</a>", style:"classDanceAD"},
                Column6: {text: "", style:"classNone"},
                Column7: {text: "", style:"classNone"},
            },
        ];

        $scope.classTables2 = [
            {
                Column0: {text: "B教室", style:"className"},
                Column1: {text: "一", style:"classDate"},
                Column2: {text: "二", style:"classDate"},
                Column3: {text: "三", style:"classDate"},
                Column4: {text: "四", style:"classDate"},
                Column5: {text: "五", style:"classDate"},
                Column6: {text: "六", style:"classDate"},
                Column7: {text: "日", style:"classDate"},
            },
            {
                Column0: {text: "上<br>午", style:"classTime"},
                Column1: {text: "", style:"classNone"},
                Column2: {text: "", style:"classNone"},
                Column3: {text: "", style:"classNone"},
                Column4: {text: "", style:"classNone"},
                Column5: {text: "", style:"classNone"},
                Column6: {text: "9:00-12:00<br><br>兒童舞團<br>中國舞", style:"classChildDG"},
                Column7: {text: "9:00-12:00<br><br>兒童舞團<br>芭蕾", style:"classChildDG"},
            },
            {
                Column0: {text: "下<br>午", style:"classTime classTimeUp"},
                Column1: {text: "", style:"classNone"},
                Column2: {text: "", style:"classNone"},
                Column3: {text: "14:00-15:00<br><br>武功<br><a href='teacher.htm?origin=5'>楊琇雯</a>", style:"classDanceAD"},
                Column4: {text: "", style:"classNone"},
                Column5: {text: "", style:"classNone"},
                Column6: {text: "14:00-15:00<br><br>兒童舞團<br>街舞", style:"classChildDG"},
                Column7: {text: "", style:"classNone"},
            },
            {
                Column0: {text: "", style:"classTime classTimeDown"},
                Column1: {text: "", style:"classNone"},
                Column2: {text: "", style:"classNone"},
                Column3: {text: "15:30-16:30<br><br>雕塑有氧<br><a href='teacher.htm?origin=4'>楊家琇</a>", style:"classDanceBL"},
                Column4: {text: "", style:"classNone"},
                Column5: {text: "", style:"classNone"},
                Column6: {text: "", style:"classNone"},
                Column7: {text: "", style:"classNone"},
            },
            {
                Column0: {text: "晚<br>上", style:"classTime classTimeUp"},
                Column1: {text: "17:30-19:30<br><br>毯子功<br>(9-12歲)<br><a href='teacher.htm?origin=3'>陳韋勝</a>", style:"classDanceAD"},
                Column2: {text: "18:00-19:00<br><br>幼兒律動<br>(3-6歲)<br><a href='teacher.htm?origin=4'>楊家琇</a>", style:"classDanceAD"},
                Column3: {text: "18:00-19:00<br><br>兒童現代舞<br><a href='teacher.htm?origin=5'>楊琇雯</a>", style:"classBaby"},
                Column4: {text: "18:00-19:30<br><br>兒童芭蕾<br>(6歲以上)<br><a href='teacher.htm?origin=1'>何宇平</a>", style:"classDanceAD"},
                Column5: {text: "18:00-19:00<br><br>兒童街舞<br>(7-10歲)<br><a href='javascript:void(0);'>小七</a>", style:"classDanceAD"},
                Column6: {text: "", style:"classNone"},
                Column7: {text: "", style:"classNone"},
            },
            {
                Column0: {text: "", style:"classTime classTimeDown"},
                Column1: {text: "20:00-21:00<br><br>MV 舞蹈<br><a href='teacher.htm?origin=7'>李婉青</a>", style:"classDanceBL"},
                Column2: {text: "19:30-20:30<br><br>MV 舞蹈<br><a href='teacher.htm?origin=7'>李婉青</a>", style:"classDanceBL"},
                Column3: {text: "", style:"classNone"},
                Column4: {text: "20:00-21:30<br><br>進階芭蕾<br>(硬鞋)<br><a href='teacher.htm?origin=1'>何宇平</a>", style:"classBaby"},
                Column5: {text: "19:30-20:30<br><br>成人街舞<br>(15歲以上)<br><a href='javascript:void(0);'>小七</a>", style:"classDanceBL"},
                Column6: {text: "", style:"classNone"},
                Column7: {text: "", style:"classNone"},
            },
        ];

        $scope.lessonIntroMouseEvent = function(mode) {
            if($scope.typeID != 1)
            {
                if(mode == 1) $scope.lessonIntro="over";
                else if(mode == 2) $scope.lessonIntro="";
                else if(mode == 3) self.lessonChoice(1);
            }
        };

        $scope.lessonScheduleMouseEvent = function(mode) {
            if($scope.typeID != 2)
            {
                if(mode == 1) $scope.lessonSchedule="over";
                else if(mode == 2) $scope.lessonSchedule="";
                else if(mode == 3) self.lessonChoice(2);
            }
        };

        self.lessonChoice = function(typeID)
        {
            if(typeID != $scope.typeID)
            {
                $scope.lessonIntro="";
                $scope.lessonSchedule="";
                $scope.typeID = typeID;
                self.dataInit();
                self.uiInit();
            }
        };

        self.dataInit = function ()
        {
            if($scope.typeID == 1)
            {
                $scope.lessonIntro = "over";
                $scope.lessonTitle = "課程介紹";
            }
            else if($scope.typeID == 2)
            {
                $scope.lessonSchedule = "over";
                $scope.lessonTitle = "舞團課表";
            }

            $scope.containerType = "type" + $scope.typeID;
            $scope.tdType = "td_type" + $scope.typeID;
        };
        self.uiInit = function ()
        {

        };

        self.dataInit();
        self.uiInit();
    }
})();