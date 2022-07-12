"""System module."""
import datetime
from dateutil.relativedelta import relativedelta

while True:
    task = input("enter your task :")
    while True:
        try:
            year = int(input("enter year :"))
            break
        except ValueError:
            print("enter valid digits only  in date!")
    while True:
        try:
            month = int(input("enter month :"))
            break
        except ValueError:
            print("enter valid digits only  in date!")
    while True:
        try:
            day = int(input("enter day :"))
            break
        except ValueError:
            print("enter valid digits only  in date!")
    date = datetime.date(year, month, day)
    print(f" you entered :{date}")
    select = input("select days or weeks or months :")
    select = select.upper()
    for i in range(10):
        if select == "DAYS":
            d = datetime.timedelta(days=+i)
            nd = date + d
            print(nd.strftime("%Y"), nd.strftime("%B"), nd.strftime("%d"), nd.strftime("%A"))
        elif select == "WEEKS":
            w = datetime.timedelta(weeks=+i)
            nd = date + w
            print(nd.strftime("%Y"), nd.strftime("%B"), nd.strftime("%d"), nd.strftime("%A"))
        elif select == "MONTHS":
            m = relativedelta(months=+i)
            nd = date + m
            print(nd.strftime("%Y"), nd.strftime("%B"), nd.strftime("%d"), nd.strftime("%A"))
        else:
            print("invalid selection")

