$(document).ready(() => {
    // 重新生成按钮点击事件
    $('#regenBtn').click(() => {
        $.get('/get/random-blessing', (data) => {
        $('#blessingText').text(data.blessing);
        }).fail(() => {
        alert('获取祝福语失败，请重试！');
        });
    });

    // 下载按钮点击事件
    $("#downloadBtn").click(() => {
     html2canvas($('.card')[0]).then(canvas => {
        const link = document.createElement('a');
        link.download = "祝福卡片.png";
        link.href = canvas.toDataURL();
        link.click();
        console.log("下载成功");
     });
    });
});

 

