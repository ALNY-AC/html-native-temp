/**
 * 变量都可以存在这里面
 */
const pageData = {
    /**
     * 这里可以放置后端来的参数
     */
    list: []
}


/**
 * 模拟从接口请求数据
 */
function ajax() {
    let list = [
        { text: '项目' },
        { text: '项目' },
        { text: '项目' },
        { text: '项目' },
    ]
    // pageData.list
    list.forEach((el) => {
        pageData.list.push(el);
    })
    render();

}

/**
 * 在这里写页面渲染的代码
 */
function render() {
    let listEl = []
    pageData.list.forEach((el, i) => {
        let $itemEl = $(`<div class="item">${i}.${el.text}</div>`);
        listEl.push($itemEl);
    });
    $('.list').html(listEl);
}


$('.add-data').on('click', function () {
    ajax();
})