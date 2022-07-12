def gen():
    import random
    global random
    random = random.randint(0, 9999)
    random = str(random).zfill(4)


def rabtor():
    print("system generated 4 digit number is :", random)
    guess = input("enter a guess:")
    if len(guess) != 4 or guess.isalpha():
        print("invalid input")
        rabtor()
    elif random == guess:
        print("WINNER")
        gen()
    elif random != guess:
        count1 = 0
        count2 = 0
        for i in range(4):
            if random[i] == guess[i]:
                count1 = count1+1
            elif guess[i] in random:
                count2 = count2+1
        print(f"you got {count1} rabbit")
        print(f"you got {count2} tortoise")


def dwc():
    while True:
        a = input("do you want to continue :")
        a = a.upper()
        if a == 'YES':
            rabtor()
        elif a == 'NO':
            print("see you")
            break
        else:
            print("ENTER YES OR NO")


gen()
rabtor()
dwc()