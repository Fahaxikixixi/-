$(function() {
    load();
    //1. 按下回车后吧完整数据存储到本地存储中
    $('#title').on('keydown', function(event) {
        //判断按下回车

        if (event.keyCode === 13) {
            if ($(this).val() === "") {
                alert("请输入内容");
            } else {
                //先读取本地存储原来的数据
                var local = getDate(); //声明一个数组local getData是下面函数名  既获取getData函数return返回的数据
                console.log(local); //查看是否返回数据

                //把local数组进行更新，把最新的数据追加给local数组
                local.push({ title: $(this).val(), done: false }); //给数组添加数据 
                //把数组local 存储给本地存储
                saveDate(local); //local 相当于实参 local= getDate() 本地存储数据 但输入后需要更新数据，因为local是局部变量，所有通过该方式传递到savaDate内进行数据更新

                //2. todolist 本地存储数据渲染加载带页面
                load();
                $(this).val('');
            }
        }
    });

    //3.  todolist 删除操作  删除本地存储数据(先获取本地，然后删除数据)
    $('ol').on('click', "a", function() { //事件委托 a
        //先获取本地存储
        var data = getDate();
        console.log(data);
        //修改数据
        var index = $(this).attr('id'); //获取点击a标签的id
        data.splice(index, 1);
        //保存到本地存储
        saveDate(data);
        //重新渲染页面
        load();
    });

    //4. todolist 正在进行和已完成选项操作
    $('ol,ul').on("click", "input", function() {
        //先获取本地存储数据
        var data = getDate();
        //修改数据      //获取所点击input框是否为选中和对应的那条数据（通过a标签的id）
        var index = $(this).siblings("a").attr("id");
        //将第index个input选择框对应index条的数据的done属性修改为 复选框的选择状态（选中ture 未选中 false）
        data[index].done = $(this).prop("checked");
        //保存到本地存储
        saveDate(data); //将上面修改的data数组数据保存到本地存储
        //重新渲染页面
        load();
    });

    //读取本地存储的数据
    function getDate() {
        //获取本地存储的todolist数据
        var data = localStorage.getItem('todolist');
        //判断本地存储数据data里面是不是为空
        if (data !== null) {
            //将本地存储数据转换为对象格式并返回数据
            return JSON.parse(data);
        } else {
            // data 为空返回一个空数组
            return [];
        }
    }

    //保存本地存储数据
    function saveDate(data) { //data相当于形参 这里的data是为了接收 上面传递来的local 数组
        //把上面local 通过data接收后保存到todolist
        localStorage.setItem('todolist', JSON.stringify(data));
    }

    //渲染加载数据
    function load() {
        //获取/读取本地数据
        var data = getDate();
        //遍历数据前清空ol ul内数据
        $('ol,ul').empty();
        var todoCount = 0; //正在进行的个数
        var doneCount = 0; //已经完成的个数
        //遍历数据
        $.each(data, function(i, n) { //i 在这里指的是数据索引号  n这里是数据
            console.log(n)
            if (n.done) {
                console.log(n.done)
                $("ul").prepend('<li><input type="checkbox" checked="checked"><p>' + n.title + '</p><a href="javascript:;" id=' + i + '></a></li>')
                doneCount++;
            } else {
                $("ol").prepend('<li><input type="checkbox"><p>' + n.title + '</p><a href="javascript:;" id=' + i + '></a></li>')
                todoCount++;
            }

        });
        $("#todocount").text(todoCount);
        $("#donecount").text(doneCount);
    }

    const fn = (a) => console.log(a);

    fn(66)
});