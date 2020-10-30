while True:
    action_str = input("请选择希望执行的操作:")
    print("您选择的是 %s" % action_str)
    # 1, 2, 3 是针对名片的操作
    if action_str in ["1", "2", "3"]:
        print("ok")
    elif action_str == "0":
        # 退出系统
        print("程序已退出!")
        break
    else:
        print("您输入有误!")
