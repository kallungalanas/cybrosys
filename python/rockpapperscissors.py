"""system module."""
import random
print(" 1 : Rock\n 2 : Paper\n 3 : Scissors ")
count_user = 0
count_computer = 0
while True:
    try:
        user_input = int(input(" User Choice : "))
        if user_input <= 3:
            computer_input = random.randint(1, 3)
            print(f" Computer Choice : {computer_input}")
            if user_input == 1 and computer_input == 1:
                print("TIE")
            elif user_input == 2 and computer_input == 2:
                print("TIE")
            elif user_input == 3 and computer_input == 3:
                print("TIE")
            if user_input == 1 and computer_input == 2:
                print("COMPUTER WIN")
                count_computer += 1
            elif user_input == 2 and computer_input == 1:
                print("YOU WIN")
                count_user += 1
            if user_input == 1 and computer_input == 3:
                print("YOU WIN")
                count_user += 1
                print(f"count of user is {count_user}")
            elif user_input == 3 and computer_input == 1:
                print("COMPUTER WIN")
                count_computer += 1
            if user_input == 2 and computer_input == 3:
                print("COMPUTER WIN")
                count_computer += 1
            elif user_input == 3 and computer_input == 2:
                print("YOU WIN")
                count_user += 1
            if count_user == 10:
                print("YOU ARE THE WINNER")
            elif count_computer == 10:
                print("COMPUTER WINNER")
            if count_user == 10 or count_computer == 10:
                break
        else:
            print("INVALID INPUT")
    except ValueError:
        print("ONLY NUMBERS ARE ALLOWED")
print(f"score of computer :{count_computer}")
print(f"score of you :{count_user}")
