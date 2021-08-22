import { SJManager } from "./SJManager";
import { counter } from "./Counter";
import { headHunter } from "./HeadHunter";
import { originiumsPacks } from "./ConstVar";
import $ from "jquery";

export class ViewControl {
    public static ViewSync(minFloor: number) {
        $('#sstone').text(SJManager.originiums);
        $('#jade').text(SJManager.compoundJade);
        $('#tojade').text(SJManager.originiums * 180);
        $('#jade').text(SJManager.compoundJade);
        $('#sixnum').text(counter.GetSix().length);
        $('#fivenum').text(counter.GetFive().length);
        $('#fournum').text(counter.GetFour().length);
        $('#threenum').text(counter.GetThree().length);
        $('#moneycost').text(`${counter.GetTimes()} / ${counter.GetSpendingMoney()}`);
        $('#rate').text(`当前6星出率: ${headHunter.AddSixProb()}%`);
        if (minFloor == 0) {
            $('#tips').text('保底已出');
        }
        else {
            $('#tips').text(`${minFloor}次内必定获得5星及以上干员`);
        }
    }

    public static ShowRes(res: HuntRes | HuntRes[]) {
        let pic_box = $('#image-box');
        pic_box.empty();
        if (res instanceof Array) {
            for (let i in res) {
                let pic_tmp = $('<img>', {
                    id: `img-agent${i}`,
                    src: `./images/${res[i].star}/${res[i].name}.jpg`,
                    class: 'agen-img'
                });
                pic_box.append(pic_tmp);
            }
        }
        else {
            let pic_tmp = $('<img>', {
                id: `img-agent0`,
                src: `./images/${res.star}/${res.name}.jpg`,
                class: 'agen-img'
            });
            $('#image-box').append(pic_tmp);
        }
    }

    public static CloseFirstEx(type: number) {
        $('#buy-sstone' + type.toString()).text('氪金' + originiumsPacks.price[type].toString() + '元买' + originiumsPacks.count[type] + '源石');
    }

    public static ClosePackage(type: number) {
        $('#buy-package' + type.toString()).attr({ "disabled": "disabled" });
        $('#buy-package' + type.toString()).hover(() => {
            $('#buy-package' + type.toString()).css('background-color', '#aaa');
        });
        $('#buy-package' + type.toString()).css('background-color', '#aaa');
        $('#buy-package' + type.toString()).css('cursor', 'no-drop');
    }

    public static HideRadio() {
        if ($('#rad0').prop('checked')) {
            $('#rad1').css('display', 'none');
        }
        else if ($('#rad1').prop('checked')) {
            $('#rad0').css('display', 'none');
        }
    }


}