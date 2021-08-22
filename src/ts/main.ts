import "../css/style.css";
import $ from "jquery";
import { counter } from "./Counter";
import { headHunter } from "./HeadHunter";
import { SJManager } from "./SJManager";
import { ViewControl } from "./ViewControl";
import { originiumsPacks, packagePacks, actList } from "./ConstVar";

var sjManager = new SJManager(counter);

function DrawOnce() {
    try {
        ViewControl.HideRadio();
        if (SJManager.compoundJade - 600 < 0) {
            let needSStone = SJManager.CanCalsOriginiumJade(true);
            if (needSStone == -1) throw new Error('合成玉/源石不足');
            let result = confirm(`是否要花费 ${needSStone} 源石来兑换 ${needSStone * 180} 合成玉用来寻访？`);
            if (result) {
                sjManager.OriginiumsToJade(needSStone);
                ViewControl.ViewSync(headHunter.GetMinFloor());
            }
            else return;
        }
        SJManager.compoundJade -= 600;

        let res = headHunter.HuntOnce();
        $('#resu').text(res.name);
        ViewControl.ViewSync(headHunter.GetMinFloor());
        ViewControl.ShowRes(res);
    }
    catch (er) {
        alert(er.message);
    }
}

function DrawTenth() {
    try {
        ViewControl.HideRadio();
        if (SJManager.compoundJade - 6000 < 0) {
            let needOriginiums = SJManager.CanCalsOriginiumJade(false);
            if (needOriginiums == -1) throw new Error('合成玉/源石不足');
            let result = confirm(`是否要花费 ${needOriginiums } 源石来兑换 ${needOriginiums * 180} 合成玉用来寻访？`);
            if (result) {
                sjManager.OriginiumsToJade(needOriginiums);
                ViewControl.ViewSync(headHunter.GetMinFloor());
            }
            else return;
        }
        SJManager.compoundJade -= 6000;
        let res = headHunter.DrawTenth();
        let res_str: string = '';
        for (let i of res) {
            res_str += `${i.name} `;
        }
        $('#resu').text(res_str);
        ViewControl.ViewSync(headHunter.GetMinFloor());
        ViewControl.ShowRes(res);
    }
    catch (er) {
        alert(er.message);
    }
}

function BuyOriginiums(type: number) {
    try {
        let num;
        if (sjManager.IsFirstBuy(type)) num = originiumsPacks.extra[type];
        else num = originiumsPacks.count[type];
        let result = confirm(`是否要花费 ${originiumsPacks.price[type]}  元来购买 ${num} 源石？`);
        if (!result) return;
        if (sjManager.IsFirstBuy(type)) ViewControl.CloseFirstEx(type);
        sjManager.BuyOriginiums(type);
        ViewControl.ViewSync(headHunter.GetMinFloor());

    } catch (er) {
        alert(er.message);
    }

}

function BuyPackage(type: number) {
    try {
        let result: boolean = confirm(`是否花费 ${packagePacks.price[type]} 元购买 ${packagePacks.name[type]} ?`);
        if (!result) return;
        sjManager.BuyPackage(type);
        ViewControl.ClosePackage(type);
        ViewControl.ViewSync(headHunter.GetMinFloor());
    } catch (er) {
        alert(er.message);
    }
}

function ConvertStoneToJade() {
    try {
        let num = parseInt(prompt("请输入您想要兑换的源石数量：", "1"));
        if (isNaN(num)) num = 1;
        let result = confirm(`是否花费 ${num} 源石来兑换 ${num * 180} 合成玉？`);
        if (!result) return;
        sjManager.OriginiumsToJade(num);
        ViewControl.ViewSync(headHunter.GetMinFloor());
    }
    catch (er) {
        alert(er.message);
    }
}

function SetHunter() {
    if ($('#selector').val() == '0') {
        headHunter.SwitchActivity(0);
    }
    else if ($('#selector').val() == '1') {
        headHunter.SwitchActivity(1);
    }
    else {
        headHunter.SwitchActivity(2);
    }
}

function ShowHis(type: MyEvent) {

    let agent_str = '';
    let agent_map: ViewData = {};
    let agent_array: string[];
    switch (type.data.type) {
        case 6: agent_array = counter.GetSix(); break;
        case 5: agent_array = counter.GetFive(); break;
        case 4: agent_array = counter.GetFour(); break;
        case 3: agent_array = counter.GetThree(); break;
        default: alert('寻访不存在此种干员'); return;
    }
    if (agent_array.length == 0) {
        alert(`没有抽到${type.data.type}星干员`);
        return;
    }

    for (let i of agent_array) {
        if (agent_map.hasOwnProperty(i)) {
            agent_map[i] += 1;
        }
        else {
            agent_map[i] = 1;
        }
    }
    for (let i in agent_map) {
        agent_str += `${i}: ${agent_map[i]}\n`;
    }
    alert(agent_str);
}


(function () {

    $('#CSTJ').on('click', ConvertStoneToJade);

    $('#show-panel1').on('click', () => {
        $('#panel1').fadeIn();
    });

    $('#show-panel2').on('click', () => {
        $('#panel2').fadeIn();
    });

    $('#close-panel1').on('click', () => {
        $('#panel1').fadeOut();
    });

    $('#close-panel2').on('click', () => {
        $('#panel2').fadeOut();
    });

    $('#selector').on('change', SetHunter);
    for (let i = 0; i < actList.length; i++) {
        let text = `${actList[i].name}(${actList[i].six.join(' ')} ${actList[i].five.join(' ')} ${actList[i].four.join(' ')} ${actList[i].three.join(' ')})`;
        $(`#opt${i}`).text(text);
    }
    $(`#opt${actList.length - 1}`).show();

    for (let i = 0; i < 6; i++) {
        $(`#buy-sstone${i}`).on('click', () => { BuyOriginiums(i); });
    }

    $('#buy-package0').on('click', () => { BuyPackage(0); });
    $('#buy-package1').on('click', () => { BuyPackage(1); });
    $('#buy-package2').on('click', () => { BuyPackage(2); });
    $('#buy-package3').on('click', () => { BuyPackage(3); });
    $('#buy-package4').on('click', () => { BuyPackage(4); });
    $('#DO').on('click', DrawOnce);
    $('#DT').on('click', DrawTenth);

    $('#sixnum').on('click', '', { type: 6 }, ShowHis);
    $('#fivenum').on('click', '', { type: 5 }, ShowHis);
    $('#fournum').on('click', '', { type: 4 }, ShowHis);
    $('#threenum').on('click', '', { type: 3 }, ShowHis);
    $('#moneycost').on('click', () => {
        let cost_data: BuyData = counter.GetSpendingData();
        let cost_str: string = '';
        if (JSON.stringify(cost_data) == '{}') {
            alert('您还没氪金呢');
            return;
        }
        for (let i in cost_data) {
            cost_str += `${i}: ${cost_data[i]}\n`;
        }
        alert(cost_str);
    });
})();




