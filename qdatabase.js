﻿//Dynamic assessmentitem bank for G10716001_dynamic_assess.html
var bank1=[];
bank1[0]='那個惡意軟體會開啟被遠端主機控制的應用程式?';
bank1[1]='那個惡意軟體會在你不知情下就安裝完成?';
bank1[2]='癱瘓網站何者為是?';
bank1[3]='何者是DDoS?';
bank1[4]='下列何者可以取得管理者帳號密碼?';
bank1[5]='某網站貼出公告[網頁遭惡意攻擊課程資料庫損毀目前搶修中不便之處敬請見諒],這是遭受什麼樣的資安攻擊?';
bank1[6]='下列何者會提高被惡意軟體攻擊的風險?';
bank1[7]='那個行為可以防範資安危險?';
bank1[8]='駭客網路入侵模式,那個行為可以防範[弱點刺探]?';
bank1[9]='行動裝置何者徵兆有惡意軟體入侵?';
var sItems=[];
	sItems[0] = "木馬程式";
	sItems[1] = "後門程式";
	sItems[2] = "電腦蠕蟲";
	sItems[3] = "釣魚郵件";
	sItems[4] = "釣魚郵件";
	sItems[5] = "釣魚網站";
	sItems[6] = "安裝套件軟體";
	sItems[7] = "以上皆是";
	sItems[8] = "對於SQL伺服器做破壞攻擊";
	sItems[9] = "發動大量攻擊封包";
	sItems[10] = "植入電腦病毒";
	sItems[11] = "竊取大量資料";
	sItems[12] = "指被藉機勒索";
	sItems[13] = "一旦參觀網站就會被攻擊或被感染惡意程式";
	sItems[14] = "機密資料會被網路罪犯偷走";
	sItems[15] = "癱瘓網站";
	sItems[16] = "隱碼攻擊";
	sItems[17] = "側錄與竊聽";
	sItems[18] = "勒索病毒";
	sItems[19] = "釣魚郵件";
	sItems[20] = "電腦蠕蟲";
	sItems[21] = "勒索病毒";
	sItems[22] = "SQL Injection攻擊";
	sItems[23] = "癱瘓網站攻擊";
	sItems[24] = "安裝即時軟體";
	sItems[25] = "安裝P2P軟體";
	sItems[26] = "安裝防毒軟體";
	sItems[27] = "安裝系統更新軟體";
	sItems[28] = "禁止使用USB隨身碟";
	sItems[29] = "瀏覽高風險的網站";
	sItems[30] = "禁止使用即時軟體";
	sItems[31] = "以上皆非";
	sItems[32] = "勿使用P2P軟體";
	sItems[33] = "謹慎開啟信件附加檔案";
	sItems[34] = "定期更新修補弱點";
	sItems[35] = "安裝防火牆";
	sItems[36] = "通話經常不尋常中斷";
	sItems[37] = "電信費用異常";
	sItems[38] = "行動裝置效能變差";
	sItems[39] = "以上皆是";
var ans = [1, 3, 1, 3, 0, 2, 1, 0, 2, 3];

var suggestItems=[];
	suggestItems[0] = "駭客後門程式通常是使用主從式架構,一般Server端會常駐於被害者的電腦提供入侵管道";
	suggestItems[1] = "受害者在不知情狀況下下載或安裝了惡意程式,或點選了釣魚郵件,釣魚網站而遭駭客入侵";
	suggestItems[2] = "(1)發動大量封包造成網頁頻寬滿載,網頁速度變慢 (2)發動分散式阻斷服務攻擊DDoS (3)針對通訊協定及特定應用弱點,讓系統服務終止.";
	suggestItems[3] = "駭客發動分散式阻斷服務攻擊(DDoS)癱瘓網站.";
	suggestItems[4] = "隱碼攻擊(SQL injection):利用輸入特殊SQL程式碼,資料庫資料被竊取或是被破壞,系統管理員帳戶被竊竄.";
	suggestItems[5] = "隱碼攻擊(SQL injection):利用輸入特殊SQL程式碼,資料庫資料被竊取或是被破壞,系統管理員帳戶被竊竄.";
	suggestItems[6] = "資訊安全防護:安裝防毒軟體、防火牆,禁止使用USB隨身碟,禁止使用P2P軟體,謹慎開啟信件附加檔案,不瀏覽高風險的網站,定期更新修補弱點";
	suggestItems[7] = "資訊安全防護:安裝防毒軟體、防火牆,禁止使用USB隨身碟,禁止使用P2P軟體,謹慎開啟信件附加檔案,不瀏覽高風險的網站,定期更新修補弱點";
	suggestItems[8] = "資訊安全防護:安裝防毒軟體、防火牆,禁止使用USB隨身碟,禁止使用P2P軟體,謹慎開啟信件附加檔案,不瀏覽高風險的網站,定期更新修補弱點";
	suggestItems[9] = "行動裝置資安威脅徵兆:(1)電池壽命變短 (2)通話經常不尋常中斷 (3)電信費用異常 (4)手機效能變差";


var prompt1=[];
prompt1[0]="1* 一般會常駐於被害者的電腦提供入侵管道";
prompt1[1]="1* 會偷偷開啟進出您電腦系統的管道";
prompt1[2]=suggestItems[0];
prompt1[3]=sItems[0*4+ans[0]];
prompt1[4]="2* 注意選項中還有符合者";
prompt1[5]="2* 本題一個以上符合";
prompt1[6]=suggestItems[1];
prompt1[7]=sItems[1*4+ans[1]];
prompt1[8]="3* 會讓網站服務中斷或停止";
prompt1[9]="3* 會造成頻寬滿載，網頁速度變慢";
prompt1[10]=suggestItems[2];
prompt1[11]=sItems[2*4+ans[2]];
prompt1[12]="4* 一種網路攻擊手法";
prompt1[13]="4* 會讓網站服務中斷或停止";
prompt1[14]=suggestItems[3];
prompt1[15]=sItems[3*4+ans[3]];
prompt1[16]="5* 注意特別是指管理者帳號密碼";
prompt1[17]="5* SQL injection攻擊：資料庫層的安全漏洞";
prompt1[18]=suggestItems[4];
prompt1[19]=sItems[4*4+ans[4]];
prompt1[20]="6* 與資料庫管理有關";
prompt1[21]="6* 入侵SQL資料庫最常見的攻擊方式";
prompt1[22]=suggestItems[5];
prompt1[23]=sItems[5*4+ans[5]];
prompt1[24]="7* 安全政策規定禁止安裝的軟體";
prompt1[25]="7* P2P軟體本身就含有間諜軟體，造成駭客入侵";
prompt1[26]=suggestItems[6];
prompt1[27]=sItems[6*4+ans[6]];
prompt1[28]="8* 該儲存裝置的資料容易暴露外洩";
prompt1[29]="8* 發現不明的隨身碟千萬別插入電腦，以免受病毒感染";
prompt1[30]=suggestItems[7];
prompt1[31]=sItems[7*4+ans[7]];
prompt1[32]="9* 作業系統與應用程式的漏洞一直是駭客喜愛攻擊的弱點之一，根據掃瞄報告修補弱點";
prompt1[33]="9* 修補漏洞弱點，確保資訊安全";
prompt1[34]=suggestItems[8];
prompt1[35]=sItems[8*4+ans[8]];
prompt1[36]="10* 注意選項中還有符合者";
prompt1[37]="10* 本題一個以上符合";
prompt1[38]=suggestItems[9];
prompt1[39]=sItems[9*4+ans[9]];

