$(document).ready(() => {
    // 重新生成按钮点击事件
    $('#regenBtn').click(() => {
        $.get('/get/random-blessing', (data) => {
        $('#chineseBlessingText').text(data.chineseBlessing).css('font-family', data.chineseFontFamily);
        $('#englishBlessingText').text(data.englishBlessing).css('font-family', data.englishFontFamily);
        console.log(data.chineseFontFamily);
        }).fail(() => {
        alert('获取祝福语失败，请重试！');
        });
    });

    // 下载按钮点击事件
    $("#downloadBtn").click(() => {

    // 获取原始卡片元素
    const originalCard = $('.card')[0];

    // 克隆原始卡片元素
    const cardClone = originalCard.cloneNode(true);

    // 对克隆元素进行样式设置
    $(cardClone).css({
        'position': 'absolute', // 定位到屏幕外，避免显示
        'left': '-9999px',
        'top': '-9999px',
        'width': '300px', // 可以保持原始尺寸，或设为固定值
        'height': 'auto',
    })

    // 将克隆元素添加到body中
    $("body").append(cardClone);

    // 对克隆元素进行截图
    html2canvas(cardClone, {
    }).then(canvas => {
       const link = document.createElement('a');
       link.download = "祝福卡片.png";
       link.href = canvas.toDataURL('image/png'); // 可以指定图片格式
       link.click();
       console.log("下载成功");

       // 从DOM中移除克隆元素
       document.body.removeChild(cardClone);
    }).catch(err => {
        console.error("截图失败: ", err);
        alert('生成图片失败，请重试！');
        // 确保即使出错也移除克隆元素
        if (document.body.contains(cardClone)) {
            document.body.removeChild(cardClone);
        }
    });
   });
});


