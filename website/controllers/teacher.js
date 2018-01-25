(function()
{
	angular
		.module('PH')
		.controller('TeacherController', TeacherController);

	TeacherController.$inject = ['$scope', 'UserData', 'LanMgr'];

	function TeacherController( $scope, UserData, LanMgr)
	{
		var self = this;
		$scope.albumTitle = "師資介紹";

		// $scope.selectIndex = 0;
        $scope.selectIndex =GetQueryString("origin")!=null? GetQueryString("origin"):0;
		$scope.teacherName = "";
		$scope.TeacherData = [];
		$scope.TeacherData1 = [];
		$scope.TeacherPics = [];
		$scope.TeacherPro = [];

		$scope.containerSelectCSS = "";
		$scope.tdSelectCSS = "";
		$scope.bottomSelectCSS = "";
		$scope.teacherPicCSS = "";
		$scope.TeacherDatas = [
			{	
				name:"趙文歆", 
				division : 3,
				picCount : 28,
				data: 
				[
					{
						title:"學歷",
						content:"國立台灣體育學院 體育舞蹈學系(現為國立體大)<br>" + 
								"紐約Peridance Capezio Center進修課程<br>" + 
								"Dance New Amsterdam進修課程<br>" + 
								"Trisha Brown Technique and Repertory Workshop.<br>" + 
								"Sean Curran Modern Technique and Repertory Workshop."
					},
					{
						title:"專長",
						content:"現代舞蹈、芭蕾舞、中國舞",
					},
					{
						title:"教學經歷",
						content:"2017 - 頭家國小、忠信國小、四維國小　舞蹈社團教師<br>" + 
								"2017 - Leader大都會雙語幼兒園　舞蹈教師(2016-2017)<br>" + 
								"2017 - 斐藝兒童舞蹈團　幼兒律動、兒童舞蹈、成人瑜珈教師(2006-2017)<br>" + 
								"2017 - 慕璇舞蹈藝術中心  芭蕾舞教師(2015-2017)<br>" + 
								"2017 - 斐藝兒童舞蹈團　幼兒律動、兒童舞蹈、成人瑜珈教師(2006-2017)<br>" + 
								"2017 - 悅芯舞集　成人瑜珈教師(2006-2017)<br>" + 
								"2017 - 文方舞蹈團　中國舞教師(2016-2017)<br>" + 
								"2017 - 戊己音樂舞蹈教室　芭蕾舞教師<br>" + 
								"2017 - 萱米舞蹈工作室　中國舞教師<br>" + 
								"2017 - 王彩珍舞蹈教室　成人芭蕾教師<br>" +
								"2016 - 西苑國中　暑期現代舞蹈社團教師<br>" +
								"2016 - 雲飛舞舍  芭蕾舞教師(2015-2016)<br>" +
								"2015 - 永安國小  舞蹈社團教師<br>" +
								"2015 - 中山國小　表演藝術代課教師<br>" +
								"2015 - 天堂鳥雙語幼稚園  舞蹈教師<br>" +
								"2014 - 豐陽國中舞蹈班　芭蕾舞兼任教師(2012-2014)<br>" +
								"2014 - 成功國中　表演藝術代課教師<br>" +
								"2013 - 華盛頓雙語幼稚園　舞蹈教師<br>" +
								"2010 - 慎齋國小　肢體創作課程、舞蹈社團教師(2006-2010)<br>" +
								"2009 - 銘傳大學　駐校藝術家執行團隊講師<br>" +
								"2014 - 靜宜大學　駐校藝術家執行團隊講師<br>" +
								"2014 - 致遠管理學院　駐校藝術家執行團隊講師<br>" +
								"2006 - 蝶舞舞蹈工作室　幼兒律動、兒童舞蹈教師(2004-2006)<br>" +
								"2005 - 元生國小、瑞塘國小　舞蹈社團教師<br>",
					},
					{
						title:"演出經歷",
						content:"2012 - 水影舞集＜女書＞<br>" + 
								"2011 - 彰化華陽舞蹈團年度發表＜春之韻＞演出<br>" + 
								"2011 - ＜第13屆磺溪文學獎暨第19輯作家作品集＞頒獎典禮演出<br>" + 
								"2010 - 極至體能舞蹈團＜小綠人＞<br>" + 
								"2010 - 第一屆＜金舞獎＞頒獎典禮演出<br>" + 
								"2010 - ＜國家品質獎＞頒獎典禮演出<br>" + 
								"2010 - ＜2010嘉義市國際管樂節＞踩街演出<br>" + 
								"2009 - 極至體能舞蹈團＜狂野台＞<br>" + 
								"2008 - 極至體能舞蹈團＜掌中芭蕾＞、＜新掌中芭蕾＞<br>" + 
								"2008 - 台南市＜大樹計畫感恩晚會＞演出<br>" + 
								"2008 - 文建會＜TADA Center秋日納涼表演季＞演出<br>" + 
								"2007 - 極至體能舞蹈團＜寵物＞<br>" + 
								"2007 - ＜凱渥服裝秀＞開場演出<br>" + 
								"2006 - 極至體能舞蹈團＜櫥窗＞<br>" + 
								"2006 - ＜95年法務部表揚推展犯罪人保護工作有功人士及團體大會＞演出<br>" + 
								"2004 - 舞蹈空間舞團＜視界2020＞<br>" + 
								"2004 - 國立台灣體育學院體育舞蹈學系第五屆畢業展＜憾動＞<br>" + 
								"2004 - ＜中華民國慶祝93年國慶大會＞表演<br>" + 
								"2003 - 國立台灣體育學院體育舞蹈學系＜年度學生舞蹈創作展＞演出<br>" + 
								"2003 - ＜中華民國慶祝92年國慶大會＞表演<br>" + 
								"2002 - 國立台灣體育學院體育舞蹈學系＜年度學生舞蹈創作展＞演出<br>" + 
								"2001 - 極至體能舞蹈團＜感應＞<br>" + 
								"2001 - 國立台灣體育學院體育舞蹈學系＜年度學生舞蹈創作展＞演出",
					},
					{
						title:"比賽經歷",
						content:"指導忠信國小參加105學年度全國舞蹈比賽 團體兒童舞蹈第一名<br>" + 
								"指導四維國小參加105學年度全國舞蹈比賽 團體現代舞蹈第二名",
					},
					{
						title:"創作作品",
						content:"2017 - ＜恬樂嬉水農家情＞發表於彰化市立舞團「回鄉」年度展演<br>" + 
								"2016 - ＜Unlimited＞發表於彰化市立舞團「舞耀、十年」年度展演<br>" + 
								"2015 - ＜Follow＞發表於台中市立豐陽國民中學「豐陽雩舞˙天籟美聲」音樂舞蹈展演<br>" + 
								"2015 - ＜Something About Us＞發表於斐藝舞團「仲夏夜之舞」年度展演<br>" + 
								"2015 - ＜Embrace＞發表於彰化市立舞團「色界」年度展演<br>" + 
								"2014 - ＜Bike＞發表於台中市立豐陽國民中學「豐陽雩舞˙天籟美聲」音樂舞蹈展演<br>" + 
								"2014 - ＜Flow＞發表於彰化市立舞團「舞躍仲夏」年度展演<br>" + 
								"2012 - ＜璀璨之夜＞、＜Catch＞發表於斐藝舞團「旋˙輕舞」年度展演<br>" + 
								"2010 - ＜虛˙實＞發表於彰化市立舞團「舞動心動」年度展演<br>" + 
								"2010 - ＜旗征戰舞＞＜花之圓舞曲＞＜喜慶迎春＞＜Cat＞發表於斐藝舞團<br>" + 
								"2010 - 「耀˙舞」年度展演<br>" + 
								"2009 - ＜入京求學＞發表於彰化市立舞團「新梁祝蝴蝶夢」年度展演<br>" + 
								"2008 - ＜青鳥＞、＜金球獻瑞＞、＜Rhythm Of The Rain＞發表於斐藝舞團「展顏蝶舞」年度展演",
					}
				]
			},
			{	
				name:"何宇平",
				division: 3,
				picCount : 14,
				data: 
				[
					{
						title:"學歷",
						content:"國立台灣體育運動大學體育舞蹈碩士班理論組<br>" +
                        		"國立台灣體育運動大學體育舞蹈系─芭蕾主修<br>",
					},
					{
						title:"專長",
						content:"芭蕾舞<br>",
					},
					{
						title:"教學經歷",
						content:"2018-非舞不可藝術中心芭蕾教師（2017-2018）<br>" +
								"2018-慕璇舞蹈教室芭蕾教師（2016-2018）<br>" +
								"2017-南投李靜枝舞藝術中心芭蕾教師（2016-2017）<br>" +
								"2017-彰化律光舞蹈團芭蕾教師（2016-2017）<br>" +
								"2017-妙璇舞團芭蕾、現代舞教師（2015-2017）<br>" +
								"2017-綺綺舞蹈班芭蕾教師（2014-2017）<br>" +
								"2017-私立青年高中兼任教師（2013-2017）<br>" +
								"2017-圓圈圈舞蹈團硬鞋舞蹈教師<br>" +
								"2017-江蘇崑洲慧聚寺-原民舞團體舞蹈指導教師<br>" +
								"2016-妙璇舞蹈團【oh~胡桃鉗】舞碼指導教師<br>" +
								"2016-擔任國立臺灣體育運動大學大學部一年級夜輔課芭蕾教師<br>" +
								"2015-擔任安和國中體育班舞蹈組暑訓芭蕾教師<br>" +
								"2015-擔任安和國中體育班舞蹈組暑訓芭蕾教師<br>" +
								"2014-彰化藝術高中舞蹈組芭蕾教師<br>" +
								"2015-游月說舞蹈團芭蕾老師（2014-2015）<br>",
					},
                    {
                        title:"演出經歷",
                        content:"2017年台中市藝林舞團《鷹兒要回家》擔任要角<br>" +
								"2017年臺中市傑出演藝團隊演出妙璇舞蹈團《紅花的香味》擔任舞者<br>" +
								"2016年 World Dance Alliance Asia-Pacific 舞碼《銅雀臺賦》演出人員<br>" +
								"2016年音樂舞蹈藝術節-樂舞花都擔任舞者<br>" +
								"2015年臺中市傑出演藝團隊妙璇舞蹈團《OH~胡桃鉗》飾演女主角：克拉拉、主要角色：糖梅仙子<br>"+
								"2015年臺灣千僖兒童舞蹈團及新加坡Re:Dance Theatre現代舞團合作演出《COMME UNE FEMME》舞者<br>"+
								"2012年蒂摩爾古薪現代舞團多倫多藝術節《戀羽Kurakurw》女主角<br>"+
								"2012年蒂摩爾古薪現代舞團《會呼吸的森林》舞者<br>"+
								"2012年國立臺灣體育運動大學舞團展演「悅」，羅雅柔老師《春》黃子嘉老師《秋》簡華葆老師《F》舞者<br>"+
								"2011年國立臺灣體育學院舞團《溯》簡華葆老師作品《S》舞者<br>"+
								"2011年國立臺灣體育學院班級創作展「沿續」舞者黃建彪老師《纏月》邱子偉《冰封》蘇立平《絆侶》舞者<br>"+
								"2011年研究生「纏樂菩提」演出人員黃偉婷畢製生中國舞《伶拂袖》黃建彪《纏月》舞者<br>"+
								"2011年研究生「域望芭蕾」演出人員羅雅柔老師《芭樂饗宴》《伴侶》舞者<br>",
                    },

				]
			},
			{	
				name:"林亞𦹃",
				division: 3,
				picCount : 5,
				data: 
				[
					{
						title:"學歷",
						content:"國立台灣體育運動大學 舞蹈學系<br>",
					},
					{
						title:"專長",
						content:"幼兒律動、現代舞",
					},
					{
						title:"教學經歷",
						content:"2016-彰化律光舞蹈舞蹈團幼律舞蹈老師<br>" +
								"2017-芭菲特舞蹈音樂教室幼律舞蹈老師<br>",
					},
                    {
                        title:"相關證照",
                        content:"RADICAL FITNESS-OXIGENO活氧舒展<br>",
                    },
					{
						title:"演出經歷",
						content:"2017-參與國立台灣體育運動大學舞蹈學系第18屆畢業製作『曙光』<br>" +
								"2016-參與全民運動會開幕演出擔任舞者<br>" +
								"2016-參與國立台灣體育運動大學舞蹈學系班級創作展『碩光』<br>" +
								"2015-參與國立台灣體育運動大學舞蹈學系班級創作展『曙光』<br>" +
								"2011～2013-參與大甲媽祖系列遶境活動<br>" +
								"2013-參與青年高中『天女神峰』大型舞劇<br>" +
								"2012-參與青年高中『魔幻森林』芭蕾舞劇<br>",
					},

				]
			},
			{	
				name:"陳韋勝",
				division: 3,
				picCount : 0,
				data: 
				[
					{
						title:"學歷",
						content:"國立臺灣體育大學  體育舞蹈學系<br>",
					},
					{
						title:"專長",
						content:"芭蕾舞、現代舞、編創",
					},
					{
						title:"演出經歷",
						content:"2011-參加中華民國建國一百年國慶晚會《搖滾音樂劇-  夢想家》擔任動作指導,演出<br>" +
							    "應邀參加2009青年舞團《塞德克之歌-風中緋櫻》演出，擔任比荷‧瓦歷斯一角<br>" +
							    "2009-LAFA．舞團「37ARTS」演出暨紀錄片演出<br>" +
							    "2008-國家戲劇院台灣舞蹈回顧篇，演出游好彥作品,獨舞《鬥魚》<br>" +
							   	"2004~2011-國立臺灣體育大學舞團巡迴演出<br>" +
							   	"2008-舞躍大地舞蹈創作比賽，獲年度大獎兩首《伶拂袖 唯鼓動》《宅男》<br>" +
							  	"2008-兩廳院【舞蹈煉金篇】演出《宅男》<br>",
					},

				]
			},
			{	
				name:"楊家琇",
				division: 5,
				picCount : 19,
				data: 
				[
					{
						title:"學歷",
						content:"嘉義國中 舞蹈班<br>" +
								"嘉義女中 舞蹈班<br>" +
								"國立台灣藝術大學 舞蹈學系<br>",
					},
					{
						title:"專長",
						content:"芭蕾舞、中國舞、幼兒律動、有氧舞蹈",
					},
                    {
                        title:"比賽經歷",
                        content:"2015參與第四屆海峽兩岸幼教師風采(才藝)大賽的初賽及決賽並都獲得第一名<br>",
                    },
                    {
                        title:"相關證照",
                        content:"2011 參與北京舞蹈學院芭蕾舞分級考試1~3級師資培訓並獲得教師資格<br>",
                    },
					{
						title:"教學經歷",
						content:"廣福公共托育中心─音樂律動老師<br>" +
								"裕民公共托育中心─音樂律動老師<br>" +
								"和平公共托育中心─律動老師<br>" +
								"佳兒托兒所─舞蹈老師<br>" +
								"高登托兒所─音樂、舞蹈老師<br>" +
								"來來托兒所─舞蹈老師<br>" +
								"東北藝園托兒所─舞蹈老師<br>" +
								"北大托兒所─舞蹈老師<br>" +
								"吉得堡幼稚園─舞蹈老師<br>" +
								"維多利亞幼稚園─太鼓老師<br>" +
								"永錡幼稚園─武術老師<br>" +
								"傑瑞幼稚園─音樂老師<br>" +
								"育太幼稚園─舞蹈、太鼓、功夫老師<br>" +
								"大恩幼稚園─舞蹈老師<br>" +
								"廣福國小─舞蹈老師<br>" +
								"北新國小─舞蹈老師<br>" +
								"北大藝術中心─芭蕾老師<br>" +
								"舞韻舞蹈團─中國舞老師<br>" +
								"中國舞蹈團─芭蕾、有氧瑜珈老師<br>" +
								"節奏感音樂教室─舞蹈老師<br>" +
								"心藝舞蹈教室─芭蕾老師<br>" +
								"酷酷舞蹈教室─芭蕾老師<br>" +
								"2013 在新埔國中擔任暑期輔導肢體開發課老師<br>",
					},
					{
						title:"演出經歷",
						content:"2017參與【大峰奢華服飾整體造型設計公司】大稻埕秋獲季  擔任舞者<br>" +
                        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;隨美江舞團於比利時參加【偉斯特洛&邦海登國際民俗舞蹈節】演出 <br>" +
                        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;參與【寬宏藝術&黑豆劇團─怪怪蛋】演出  擔任操偶演員<br>" +
                        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;參與【藝鑫創意表演工作室】尾牙演出&表揚大會  擔任舞者<br>" +
                        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;參與【魔浪超劇場─文化就在巷子】演出 擔任舞者<br>" +
                        "2016隨美江舞團於澳門參加【兩岸四地舞蹈菁英薈萃─劃破時空舞向2017】演出 擔任舞者<br>" +
                        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;參與【美江舞蹈團─天神女媧】演出 擔任舞者<br>" +
                        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;隨美江舞團於校園巡迴講座<br>" +
                        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;參與【2016第五屆文化藝術部】頒獎典禮  擔任禮儀小姐<br>" +
                        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;參與【大峰奢華服飾整體造型設計公司】年貨大街獻壽  擔任舞者<br>" +
                        "2015參與如果兒童劇團【遊樂園奇幻之旅】演出 擔任舞者<br>" +
                        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;參與【亞太文化日】活動演出 擔任舞者<br>" +
                        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;參與【金管會─舞韻風華】活動演出 擔任舞者<br>" +
                        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;隨美江舞蹈團赴美參加國際舞蹈音樂節演出 擔任舞者<br>" +
                        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;參與【方相舞蹈團─蝶戲林間】演出 擔任舞者<br>" +
                        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;參與【美江舞蹈團】舞蹈節演出 擔任舞者<br>" +
                        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;參與【石門金剛宮】四面佛獻佛演出  擔任舞者<br>" +
                        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;參與【美江舞蹈團─客韵繚繞舞翩翩】演出 擔任舞者<br>" +
                        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;隨如果兒童劇團赴新加坡演出【喜洋洋與灰太郎的三個願望】擔任舞者<br>" +
                        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;參與桃園國際機場音樂定幕劇【航空小劇場】演出  擔任舞者<br>" +
                        "2014參與【美江舞蹈團─大山背傳奇】演出 擔任舞者<br>" +
                        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;參與【中央芭蕾舞團】於西門町快閃活動  擔任舞者<br>" +
                        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;參與【2014第四屆文化藝術部】頒獎典禮  擔任禮儀小姐<br>" +
                        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;參與【美江舞蹈團─客韵繚繞舞翩翩】演出 擔任舞者<br>" +
                        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;參與【羅德芭蕾舞團─經典芭蕾】演出 擔任舞者<br>" +
                        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;參與宜蘭傳統藝術中心踩街演出【西遊記】擔任 舞蹈演員<br>" +
                        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;參與【世紀舞匯】南投燈會閉幕演出  擔任舞者<br>" +
                        "2013 參與【信義房屋】舞台短劇演出 擔任舞者<br>" +
                        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;參與【過年綜藝特別節目─舞力全開】開場舞 擔任舞者<br>" +
                        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;參與【電視劇─風水世家】擔任臨時演員<br>" +
                        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;參與【SK-Ⅱ產品發表會宣傳活動】擔任舞者<br>" +
                        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;受邀參與【聲子樂集&婆娑舞集─身形聲動】演出 擔任舞者<br>" +
                        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;參與【鶴英舞蹈團─芭蕾盛宴】演出 擔任舞者<br>" +
                        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;參與【鶴英舞蹈團─園丁的女兒】演出 擔任舞者<br>" +
                        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;參與【2013年第二屆國際盃美容美髮大賽】擔任Model<br>" +
                        "2012 參與【鶴英舞蹈團─柯碧莉亞】演出 擔任舞者<br>" +
                        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;參與【伊舞集─大觀夢】演出 擔任舞者<br>" +
                        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;參與【鶴英舞蹈團─走進古典】演出 擔任舞者<br>" +
                        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;參與【電影─阿嬤的夢中情人】擔任臨時演員<br>" +
                        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;參與【電視劇─美人龍湯】擔任臨時演員<br>" +
                        "2011參與國家教育研究院揭碑儀式暨院長布達典禮演出 擔任舞者<br>" +
                        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;參與中華民國自動控制協會活動開幕演出 擔任舞者<br>" +
                        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;參與臺中市傳統藝術節 藝術表演歡度元宵演出 擔任舞者<br>" +
                        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;參與國立臺灣藝術大學「兩岸文創論壇」開幕演出 擔任舞者<br>"+
						"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;參與台灣藝術大學舞蹈學系100及畢業製作【共舞紀事】巡迴演出舞者<br>"+
						"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;受邀參與【黃香蓮歌仔戲團─江南第一風流才子】演出 擔任舞者<br>"+
						"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;參與【永康一族快閃活動】演出 擔任舞者<br>"+
						"2010 參與國立台灣藝術大學赴大陸參加【第4屆閩台對渡文化節既蚶江海上潑水節】演出舞者<br>"+
						"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;參與台藝大班級年度創作展【我舞故我在】 擔任舞者<br>"+
						"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;受邀參與南海扶輪社活動演出 擔任舞者<br>"+
						"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;受邀參與台北大同扶輪社第二十七屆新職員就職典禮演出 擔任舞者<br>"+
						"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;參與台藝大【藝術沙龍】演出舞者<br>"+
						"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;參加國際金舞獎舞蹈比賽 現代舞入選作品【微光之息】 擔任舞者<br>"+
						"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;受邀參與統一超商北二區加盟經營聯誼會演出 擔任舞者<br>"+
						"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;參與【大觀舞集】中國舞年度展公演【舞蹈風華四十年】演出 擔任舞者<br>"+
						"2009 參與台藝大【Fun玩藝天】演出舞者<br>"+
						"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;參與台藝大班級年度創作展【The corner of spot】 擔任舞者<br>"+
						"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;參與台北三十舞蹈劇場【三十沙龍】演出舞者<br>"+
						"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;參與【大觀舞集】芭蕾舞年度公演【胡桃鉗】演出舞者<br>"+
						"2008 參與台藝大班級年度創作展【異值】 擔任舞者<br>"+
						"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;參與飛鳳30感恩獻舞【嘉賓讌】演出舞者<br>"+
						"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;參與溫世仁音樂紀念會演出(於台北城市舞台演出)<br>"+
						"2007 受邀參與【許世賢博士百周年榮耀紀念音樂會】開場舞者<br>"+
						"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;受邀參與【2007府城七夕16歲藝術節】演出舞者<br>"+
						"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;受邀代表國家赴美參加第三十屆年會所主辦之【寶島之夜】晚會演出舞者<br>"+
						"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;參與溫世仁音樂紀念會演出(於國父紀念館演出)<br>",

    				},
				]
			},
			{	
				name:"楊琇雯",
				division: 3,
				picCount : 29,
				data: 
				[
					{
						title:"學歷",
						content:"國立臺灣體育運動大學舞蹈學系<br>",
					},
					{
						title:"專長",
						content:"現代舞、中國舞、芭蕾",
					},
					{
						title:"教學經歷",
						content:"沛華實業股份有限公司、萬達國際物流股份有限公司(辦公室有氧舞蹈老師)<br>",
					},
					{
						title:"演出經歷",
						content:"2017-臺中國家歌劇院《女武神》特技演員<br>"+
								"2017-國立臺灣體育運動大學舞蹈學系第18屆畢業巡演【極光】舞者<br>"+
								"2016-華僑華人春節聯歡晚會<遠方的惦念>舞者<br>"+
								"2016-舞躍大地銀牌獎《極》巡迴演出 舞者<br>"+
								"2016-國立臺灣體育運動大學舞團【啟】舞者<br>"+
								"2016-第四屆海峽青年節兩岸青年<攜手、同心>嘉年華舞者<br>"+
								"2016-海峽兩岸青少年舞蹈交流展演舞者<br>"+
								"2016-國立臺灣體育運動大學舞蹈學系班級創作展「碩光」舞者<br>"+
								"2015-國立臺灣體育運動大學舞蹈學系碩士班劉慧珊・涂沁妤雙人聯展【情繫花語】舞者<br>"+
								"2015-安麗年會表演舞者<br>"+
								"2015-國立臺灣體育運動大學舞團【20】舞者<br>"+
								"2015-國立臺灣體育運動大學舞蹈學系班級創作展「曙光」舞者<br>",

    				},
					{
						title:"創作作品",
						content:"班級創作展《面懼》<br>"+
                        		"國際獅子會300C1區尾牙表演<br>",
					},

				]
			},
			{	
				name:"謝瑋庭",
				division: 3,
				picCount : 32,
				data: 
				[
					{
						title:"學歷",
						content:"2012-2017  國立臺灣體育運動大學舞蹈系<br>"+
                        		"2012-2017  國立臺灣體育運動大學舞蹈系<br>",
					},
					{
						title:"專長",
						content:"中國舞、兒童芭蕾、現代、成人中國舞<br>",
					},
					{
						title:"演出經歷",
						content:"2018-慈善口琴音樂交響會曲目天路之舞蹈演出<br>"+
								"2017-華人華僑春晚晚會「遠方的惦念」演出<br>"+
								"2017-國立臺灣體育運動大學第18屆畢業製作「極光」演出<br>"+
								"2016-『第四屆海峽青年節』演出<br>"+
								"2016-『2016海峽兩岸x共舞未來』演出<br>"+
								"2016-『105全民運動會』開幕演出<br>"+
								"2016-『台中國際踩舞祭』演出<br>"+
								"2016-劉慧珊、凃沁妤雙人聯展『情繫花語』演出<br>"+
								"2016-國立臺灣體育運動大學第18班級創作展『碩光』演出<br>"+
								"2016-『舞躍大地舞蹈創作比賽』巡迴演出<br>"+
								"2015-『首屆海峽兩岸大學生舞蹈大賽』演出<br>"+
								"2015-『第三屆海峽青年節』演出<br>"+
								"2015-『2015 海峽兩岸x 共舞未來』演出<br>"+
								"2015-國立臺灣體育運動大學第18屆班級創作展『曙光』演出<br>"+
								"2014-國立臺灣運動大學舞團年度巡演『灶』演出<br>"+
								"2013-國立臺中文華高級中學舞蹈班第20屆班級創作展『一觸即發』演出<br>"+
								"2012-國立臺中文華高級中學舞蹈班第20屆畢業舞展『Dazzle』演出<br>"+
								"2011-參與啦啦隊比賽獲得亞軍<br>"+
								"2011-參與全國舞蹈比賽團體舞榮獲特優<br>",

					},
					{
						title:"教學經歷",
						content:"2018-培培動態藝術中心擔任成人中國舞老師<br>"+
								"2018-妙璇舞蹈團擔任芭蕾老師<br>"+
								"2017-永豐棧生活會館成人中國舞課程實習教師<br>"+
								"2017-芭菲特舞蹈團擔任幼兒律動、兒童中國舞及兒童芭蕾老師<br>"+
								"2017-霧峰四德國小擔任舞蹈社團舞蹈老師<br>"+
								"2017-臺中四維國小擔任舞蹈社團舞蹈老師<br>"+
								"2017-芯蕾舞蹈藝術中心擔任中國舞及芭蕾舞蹈老師<br>"+
								"2017-瓊瑢舞蹈團擔任中國舞、芭蕾、現代舞老師<br>"+
								"2016-彰化律光舞蹈團擔任幼兒律動及中國舞老師<br>",

    				},
					{
						title:"比賽經歷",
						content:"指導四維國小參與106學年度全國舞蹈比賽團體現代舞蹈甲等<br>" +
								"指導四德國小參與106學年度全國舞蹈比賽團體民俗舞蹈甲等<br>" ,
					},
                    {
                        title:"創作作品",
                        content:"2016-編創『歡』發表於彰化律光舞蹈團< wow娃舞 >年度舞展<br>",
                    }
				]
			},
			{	
				name:"李婉青",
				division: 3,
				picCount : 9,
				data: 
				[
					{
						title:"學歷",
						content:"國立台灣體育大學 舞蹈系<br>",
					},
					{
						title:"專長",
						content:"芭蕾舞、現代舞、中國舞、MV流行舞、商業舞蹈<br>" ,
					},
					{
						title:"教學經歷",
						content:"綺綺舞蹈社 兒童MV舞蹈<br>" ,
					},
					{
						title:"演出經歷",
						content:"康康出道二十週年<我要謝謝你>演唱會舞者<br>"+
                        		"玖壹壹<派對俠>舞者<br>"+
								"伯慶2017年度績優直銷商表揚大會LED激光水鼓開場演出<br>"+
								"大立光電迎新感恩晚會舞者<br>"+
								"2017日月光測試廠尾牙舞者<br>"+
								"第八屆朴子太子文化季演出嘉賓<br>"+
								"2017杜卡迪車距舞者<br>"+
								"台中國際旅展記者會舞者<br>"+
								"台南西門新光三越資生堂MQ彩妝系列舞者<br>"+
								"高雄漢神百貨資生堂莉薇特麗系列舞者<br>"+
								"資生堂百優精純乳霜活動舞者<br>"+
								"台中市政府高山茶義賣活動記者會<br>"+
								"交通部觀光局近悅遠來高澎滿座記者會<br>"+
								"台北食品加盟展 日出茶太表演舞者<br>",

            		},

				]
			},
            {
                name:"蔡慰親",
                division: 5,
                picCount : 12,
                data:
                    [
                        {
                            title:"學歷",
                            content:"國立台灣體育大學舞蹈系<br>",
                        },
                        {
                            title:"專長",
                            content:"兒童舞蹈、民俗舞蹈、芭蕾舞蹈、現代舞蹈、流行街舞<br>" +
                            "爵士舞蹈、有氧舞蹈、瑜珈舞蹈…等<br>" +
                            "舞蹈教學、舞蹈編創、商業舞蹈表演、帶動唱",
                        },
                        {
                            title:"教學經歷",
                            content:"私人舞蹈教室個人課程(流行街舞指導老師)<br>" +
                            "台中明德女中熱舞社團 (指導老師)<br>" +
                            "台中芭菲特舞蹈教室（兒童街舞、MV舞蹈課程老師）<br>" +
                            "台中布拉格音樂舞蹈教室（兒童律動舞蹈老師）<br>" +
                            "新竹關西舒活舞蹈教室（NEW JAZZ、有氧舞蹈課程老師<br>" +
                            "新竹活力健身館（NEW JAZZ、瑜珈舞蹈課程老師<br>" +
                            "新竹台積電健身館（NEW JAZZ、瑜珈舞蹈課程老師）<br>" +
                            "台中嶺東高級中學管樂隊(旗舞指導老師)<br>" +
                            "台中文山社區大學（NEW JAZZ舞蹈課程老師）<br>" +
                            "台中長青社區（NEW JAZZ舞蹈課程老師）<br>" +
                            "台中安吉兒幼稚園 (兒童律動舞蹈課程老師)<br>" +
                            "台中家扶中心 (律動舞蹈課程老師)<br>" +
                            "台中救國團 (NEW JAZZ、兒童街舞、瑜珈舞蹈課程老師)<br>" +
                            "台中高農舞蹈社團 (指導老師)<br>" +
                            "台中青年高中熱舞社團 (指導老師)<br>" +
                            "台中潭子斐藝舞蹈中心 (兒童街舞、ＭＶ舞蹈課程老師)<br>" +
                            "台中大地舞蹈教室（NEW JAZZ舞蹈課程老師）<br>" +
                            "台中皇家舞蹈教室 (中國舞基本、兒童街舞暑期集訓課程老師)<br>" +
                            "彰化市立健身會館(有氧舞蹈課程老師)<br>",
                        },
                        {
                            title:"演出經歷 - 活動主持",
                            content:"2008 - 月眉育樂世界暑期活動 主持人兼dancer<br>" +
                            "2008 - 月眉馬拉灣暑期新設施鯊魚浪板開幕 主持人兼dancer<br>" +
                            "2008 - 月眉馬拉彎鯊魚浪板衝浪比賽 主持人兼dancer<br>" +
                            "2008 - 安泰人壽活動 助理主持人兼dancer<br>" +
                            "2007 - Mazda請客季第2彈巡迴活動 主持人兼dancer<br>",
                        },
                        {
                            title:"演出經歷 - 記者會及大型活動",
                            content:"福特汽車新車發表會dancer<br>" +
                            "全民運動會開幕表演dancer<br>" +
                            "信義房屋尾牙表演活動dancer<br>" +
                            "純白體驗新產品發表會dancer<br>" +
                            "雙十節總統府國慶表演dancer<br>" +
                            "台中洲際盃棒球場開幕表演dancer<br>" +
                            "嘉義東石人工海灘開幕活動表演dancer<br>" +
                            "台中精致機械股份有限公司尾牙表演活動dancer<br>" +
                            "茂順機械密封股份有限公司尾牙表演活動 dancer<br>" +
                            "2017 - 美樂家開幕表演dancer<br>" +
                            "2016 - 富邦銀行義賣開場帶動dancer<br>" +
                            "2013 - 艾斯摩爾公司尾牙表演dancer<br>" +
                            "2013 - 樂團演出dancer<br>" +
                            "2012 - 紅白大賞節目開場表演dancer<br>" +
                            "2011 - 華固建設年終饗宴表演dancer<br>",
                        },
                        {
                            title:"演出經歷 - 記者會及大型活動",
                            content:"2011 - ELLE雜誌彩裝評比發表會開場表演dancer<br>" +
                            "2011 - 台中精機股份有限公司尾牙表演dancer<br>" +
                            "2011 - 裕隆集團北區汽車事業體聯歡晚會表演dancer<br>" +
                            "2011 - 台中宏全公司尾牙表演dancer<br>" +
                            "2011 - 台中電子有限公司尾牙表演dancer<br>" +
                            "2011 - 西湖渡假村尾牙表演dancer<br>" +
                            "2011 - 瑞晶電子股份有限公司尾牙表演dancer<br>" +
                            "2011 - Mazda群英表彰式暨英雄晚會表演dancer<br>" +
                            "2011 - Mazda群英表彰式暨英雄晚會舞台助理<br>" +
                            "2011 - 美兆生活表揚大會表演dancer<br>" +
                            "2011 - 精聯保經精聯盃頒獎典禮暨晚會表演dancer<br>" +
                            "2011 - 福特汽車福特英雄晚宴表演dancer<br>" +
                            "2011 - 福特汽車福特英雄晚宴舞台助理<br>" +
                            "2011 - 戀戀桐花祭音樂會表演dancer<br>" +
                            "2011 - 愛身健俪新品發表會表演dancer<br>" +
                            "2011 - 文創商店開幕儀式表演dancer<br>" +
                            "2011 - MGM台灣VIP晚宴表演dancer<br>" +
                            "2011 - 台新金控旺年晚宴表演dancer<br>" +
                            "2011 - 凱基證券業務年終晚宴表演dancer<br>" +
                            "2011 - 台中精密機械公司尾牙表演dancer<br>" +
                            "2011 - 台灣村田公司尾牙表演dancer<br>" +
                            "2011 - 台灣大哥大年終晚宴表演dancer<br>" +
                            "2010 - 凱基證券公司尾牙表演活動 dancer<br>" +
                            "2010 - 寶島眼鏡公司尾牙表演活動 dancer<br>" +
                            "2010 - 台灣村田公司尾牙表演活動 dancer<br>" +
                            "2010 - 台中月眉育樂世界春節表演活動 dancer<br>" +
                            "2010 - 現代汽車春酒表演活動 dancer<br>" +
                            "2010 - 國泰人壽業務大會開場dancer<br>" +
                            "2010 - 中國浪琴錶晚宴dancer<br>" +
                            "2010 - La Mer新品發表記者會dancer<br>" +
                            "2010 - La Mer VIP 晚宴開場舞dancer<br>" +
                            "2010 - 遠雄房屋表揚大會dancer<br>" +
                            "2010 - 現代汽車新車發表dancer<br>" +
                            "2010 - 廣源科技園區爱德華新廠落成大會dancer<br>" +
                            "2010 - 台中市貿寵物展開場dancer<br>" +
                            "2010 - 精聯保經年度表揚大會dancer<br>" +
                            "2010 - 台灣製產品MIT微笑標章展售會單車樂活自由行表演dancer<br>" +
                            "2010 - 高雄中國武術研討會表演dancer<br>" +
                            "2010 - 台茂購物中心開幕開場表演dancer<br>" +
                            "2010 - 台茂購物中心開幕舞台助理<br>" +
                            "2009 - 南山人壽榮譽獎典禮 舞台助理<br>" +
                            "2009 - 中國安利精英晚宴 show girl<br>" +
                            "2009 - 安麗水樣派對活動 dancer<br>",
                        },
                        {
                            title:"比賽經歷",
                            content:"2008 - 舞林大道 台中區<br>" +
                            "2008 - 台北捷運盃<br>" +
                            "2007 - NIKE舞蹈創意大賽活力組 冠軍<br>" +
                            "2007 - 決戰舞蹈館 台中地區晉級<br>",
                        },
                        {
                            title:"創作作品",
                            content:"國泰人壽尾牙表演編排<br>" +
                            "國立台灣體育大學啦啦隊舞蹈表演<br>" +
                            "台中黎棧PUB表演dancer<br>" +
                            "台中新天地餐廳表演dancer<br>" +
                            "2016 - 私人求婚舞蹈編排<br>" +
                            "2011 - 戀戀桐花祭音樂會表演編排<br>" +
                            "2011 - 舞蹈團體Twenty-One澳門銀河表演編排<br>" +
                            "2011 - 精聯保經精聯盃頒獎典禮暨晚會表演編排<br>" +
                            "2010 - 精聯保經年度表揚大會表演編排<br>" +
                            "2010 - 資生堂尾牙表演編排<br>" +
                            "2010 - 新竹湖口國中運動會表演編排<br>" +
                            "2010 - 新竹湖口國中新竹縣舞蹈比賽現代舞丙組編排<br>" +
                            "2007 - 榮總醫院尾牙表演<br>" +
                            "2004 - 台北總統府跨年晚會dancer<br>",
                        },
                    ]
            },

		];

$scope.teacherIntroMouseEvent = function(mode) {
			if($scope.typeID != 1)	
			{
				if(mode == 1) $scope.teacherIntro="over";
				else if(mode == 2) $scope.teacherIntro="";
				else if(mode == 3) self.teacherChoice(1);
			}
		};
$scope.clickTeacher = function(index) {
			$scope.selectIndex = index;
			$scope.teacherName = $scope.TeacherDatas[index].name;
			var division = $scope.TeacherDatas[index].division;

			$scope.TeacherData = [];
			$scope.TeacherData1 = [];
			$scope.TeacherPics = [];
			$scope.TeacherPro = [];

			for (var i = 0; i < $scope.TeacherDatas[index].data.length; i++) {
				var data = $scope.TeacherDatas[index].data[i];
				if(i == 1 ) $scope.TeacherPro.push(data);
			    else if(i < division)   { 	$scope.TeacherData.push(data);    }
			    else { 	$scope.TeacherData1.push(data);   }
			}

			for (var i =0; i < $scope.TeacherDatas[index].picCount; i++) {
				$scope.TeacherPics.push(i);
			}

			$scope.containerSelectCSS = "count" + index;
			$scope.tdSelectCSS = "count" + index;
			$scope.bottomSelectCSS = "count" + index;
			$scope.teacherPicCSS = "count" + index;
		};

		self.dataInit = function () 
		{
			$scope.clickTeacher($scope.selectIndex);
		};

		self.uiInit = function ()
		{
			
		};
		
		self.uiInit();
	    self.dataInit();
	}
})();