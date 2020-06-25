// 상품 데이터
const data = [
    { name: "물", price: 1500 },
    { name: "케이크", price: 25000 },
    { name: "사탕", price: 300 },
    { name: "커피", price: 7000 },
    { name: "쿠키", price: 15000 },
    { name: "떡볶이", price: 8000 },
    { name: "도넛", price: 7500 },
    { name: "음료수", price: 3000 },
    { name: "햄버거", price: 12000 },
    { name: "아이스크림", price: 5000 },
];

/*=================================================================
=================================================================== */

//customizing

$(document).ready(function () {
    for (let i = 0; i < data.length; i++) {
        const name = data[i].name;
        const price = data[i].price;
        $("ul.item_list").append(`<li>
        <div class="item">${name}</div>
        <div class ="item_img img${i + 1}">아이템</div>
        <div class ="item_price">${price}원</div>
        </li>\n`);
    }

    $(".click_btn").on("click", function () {
        $(".modal").css("display", "block");
        const cost = $("input[type=number]").val();

        const result = data.filter((x) => {
            return x.price <= cost;
        });

        const sort = "price";
        const finallyResult = result.sort(function (a, b) {
            return b[sort] - a[sort];
        });

        const best_name = finallyResult[0];
        if (best_name) {
            const best = finallyResult[0].name;
            const best_itemIdx = data.findIndex((obj) => obj.name === best);
            console.log(best_itemIdx);
            $(".modal_box").append(
                `<div class="item_img img${best_itemIdx + 1}"></div>\n
                <div class="modal_price">${finallyResult[0].price}원</div>
                <div class="result">${cost}원으로 구매할수 있는 가장 비싼 상품은 <span>${
                    finallyResult[0].name
                }</span>입니다</div>`,
            );
        } else {
            $(".modal_box").append(
                `<div class="result">슬프게도 ${cost}원으로 구매할수 있는 상품은 없습니다</div>`,
            );
        }
    });

    $(".xbtn").on("click", function () {
        $(".modal").css("display", "none");
        $(".modal_box .item_img").remove();
        $(".modal_box .modal_price").remove();
        $(".modal_box .result").remove();
        $("input[type=number]").val("");
    });
});
