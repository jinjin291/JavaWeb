//ʱ���ʽ�������գ�-----------------------------------��json��������stringת��
function DateTime(date) {
    var NowDate = new Date();
    var NowDate2 = new Date(NowDate.getFullYear() + "/" + (NowDate.getMonth() + 1) + "/" + NowDate.getDate());
    var time = strtime.replace("����", "").replace("����", "").replace("AM", "").replace("PM", "").replace(/-/g, "/");
    if (time.indexOf("20") != 0)//������20��ͷ����ʾstringʡ����20
    {
        time = "20" + time;
    }
    var isam = (strtime.toString().indexOf("����") > 0 || strtime.toString().indexOf("PM") > 0) ? false : true;
    var oDate = new Date(time);
    if (!isam)//������Ҫ����12Сʱ
    {
        oDate.setHours(oDate.getHours() + 12);
    }
    return oDate.Format("yyyy-MM-dd");
}
//�޸�ʱ���ʽ��������ʱ��Աȣ�����������������������������������json��������stringת��
function simpleTime(strtime) {
    if (strtime.length <= 0 || strtime == "undifend")
        return "";
    var NowDate = new Date();
    var NowDate2 = new Date(NowDate.getFullYear() + "/" + (NowDate.getMonth() + 1) + "/" + NowDate.getDate());
    var time = strtime.replace("����", "").replace("����", "").replace("AM", "").replace("PM", "").replace(/-/g, "/");
    if (time.indexOf("20") != 0)//������20��ͷ����ʾstringʡ����20
    {
        time = "20" + time;
    }
    var isam = (strtime.toString().indexOf("����") > 0 || strtime.toString().indexOf("PM") > 0) ? false : true;
    var oDate = new Date(time);
    if (!isam)//������Ҫ����12Сʱ
    {
        oDate.setHours(oDate.getHours() + 12);
    }
    var oDate2 = new Date(oDate.getFullYear() + "/" + (oDate.getMonth() + 1) + "/" + oDate.getDate());;
    var date3 = NowDate2.getTime() - oDate2.getTime()  //ʱ���ĺ�����
    //������������
    var days = Math.floor(date3 / (24 * 3600 * 1000))

    if (days == 0)//�����ڵ���ʾʱ��
    {
        return oDate.getHours() + ":" + oDate.getMinutes();
    }
    else if (days == 1) {
        return "����  " + oDate.getHours() + ":" + oDate.getMinutes();
    }
    else if (days == 2) {
        return "ǰ��  " + oDate.getHours() + ":" + oDate.getMinutes();
    }
    else if (Number(NowDate.getFullYear() - oDate.getFullYear()) >= 1) {
        return oDate.Format("yyyy-MM-dd hh:mm");
    }
    else {
        return oDate.Format("MM-dd hh:mm");
    }
}
//������������
function simpleText(txt, num)
{
    if (txt.length > num)
        return txt.substr(0, num)+"...";
    else
        return txt;
}
//����ʱ���ʽ����������������������������������date����ת�����ƶ��ĸ�ʽ��string����
Date.prototype.Format = function (fmt) { //author: meizz   
    var o = {
        "M+": this.getMonth() + 1,                 //�·�   
        "d+": this.getDate(),                    //��   
        "h+": this.getHours(),                   //Сʱ   
        "m+": this.getMinutes(),                 //��   
        "s+": this.getSeconds(),                 //��   
        "q+": Math.floor((this.getMonth() + 3) / 3), //����   
        "S": this.getMilliseconds()             //����   
    };
    if (/(y+)/.test(fmt))
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt))
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}
//��ȡURL����
function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null)
        return unescape(r[2]);
    return null;
}
//��ȡcookie
function getCookie(name) {
    var arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
    if (arr != null && unescape(arr[2]) != "")
        return unescape(arr[2]); return null;
}
//дcookie
function setCookie(name, value) {

    //$.cookie('the_cookie', null, { path: '/' });
    //var startDate = new Date();
    //var endDate = startDate.getTime() + (3 * 60 * 60 * 1000);//3Сʱ��Cookie����
    //var now = "";
    //now = now + (startDate.getHours() + 3) + "��";
    //now = now + startDate.getMinutes() + "��";
    //$.cookie('the_cookie', 'Ϊ���ṩ���WIFI��    ' + now, { expires: endDate, domain: 'zzcxyz.com', path: '/' });


    var strsec = 3 * 60 * 60 * 1000;
    var exp = new Date();
    exp.setTime(exp.getTime() + strsec * 1);
    document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
}
//ɾ��cookies
function delCookie(name) {
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval = getCookie(name);
    if (cval != null)
        document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
}
//��ת�µ�ҳ��
function Gotonew(href) {
    location.href = href;
}
//ҳ����ת��panel
function Goto(divid) {
    $.ui.loadContent(divid, false, false, "slide");
}
/*function goto(url) {
    window.location.href = url;
}
*/
//�ж��Ƿ��ʼ�
function IsEmail(email)
{
    var reg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
    if (!reg.test(email)) {
        return false;
    }
    else
        return true;
}
//bootstrap����ҳ�������޸�ѡ��ҳ
function SelectMenu(obj)
{
    $(obj).parents().find(".tree").find(".selected").removeClass("selected");
    $(obj).addClass("selected");
}

function checkNumber(nubmer) {
    var re = /^[0-9]+.?[0-9]*$/;  
    if (!re.test(nubmer)) {
        return false;
    }
    return true;
}
//�Ƿ����ֻ�����
function IsPhone(tel) {
    var reg = /^0?1[3|4|5|8][0-9]\d{8}$/;
    if (reg.test(tel)) {
        return true;
    } else {
        return false;
    };
}