# Change Return Program - The user enters a cost and then the amount of money
# given. The program will figure out the change and the number of
# quarters, dimes, nickels, pennies needed for the change.
# Author: Codetheist
# Company: Codetheist, LLC
# Email: codetheist@codetheist.com

import math

cost = float(input("Enter the cost: $"))
amount_tender = float(input("Enter the amount: $"))


def change_return():
    change = amount_tender - cost

    if(change > 0):

        cash_calculation(change)
        coins_calculation(change)


def cash_calculation(change):
    # USD currency amount
    one_hundred_dollars = 100
    fifty_dollars = 50
    twenty_dollars = 20
    ten_dollars = 10
    five_dollars = 5
    one_dollar = 1

    # Currency count
    one_hundred_dollars_count = 0
    fifty_dollars_count = 0
    twenty_dollars_count = 0
    ten_dollars_count = 0
    five_dollars_count = 0
    one_dollar_count = 0
    if(change >= 100 and change >= 50):
        dollars = int(change / one_hundred_dollars)
        one_hundred_dollars_count = dollars
    if(change >= 50 and change >= 20):
        dollars = int(change / fifty_dollars)
        fifty_dollars_count = dollars
    if(change >= 20 and change >= 10):
        dollars = int(change / twenty_dollars)
        twenty_dollars_count = dollars
    if(change >= 10 and change >= 5):
        dollars = int(change / ten_dollars)
        ten_dollars_count = dollars
    if(change >= 5 and change >= 1):
        dollars = int(change / five_dollars)
        five_dollars_count = dollars
    if (change >= 1):
        dollars = int(change / one_dollar)
        one_dollar_count = dollars
    else:
        print("Cash not render")

        print(f"Hundreds amount: %.0f" % one_hundred_dollars_count)
        print(f"Fifties amount: %.0f" % fifty_dollars_count)
        print(f"Twenties amount: %.0f" % twenty_dollars_count)
        print(f"Tens amount: %.0f" % ten_dollars_count)
        print(f"Fives amount: %.0f" % five_dollars_count)
        print(f"Ones amount: %.0f" % one_dollar_count)


def coins_calculation(change):
    # USD currency amount
    quarters = 0.25
    dimes = 0.10
    nickels = 0.05
    pennies = 0.01

    # Currency count
    quarter_count = 0.0
    dime_count = 0.0
    nickel_count = 0.0
    penny_count = 0.0
    dollars = 0

    if(change % quarters and change % dimes and change % nickels and change % pennies):
        quarter_count = (int(change % quarters))
        dime_count = int(change / dimes)
        nickel_count = int(change / nickels)
        penny_count = int(change / pennies)
        print(f"\nYour change: $%.2f" % change)
        print(f"Quarter amount: {quarter_count}")
        print(f"Dime amount: {dime_count}")
        print(f"Nickel amount: {nickel_count}")
        print(f"Penny amount: {penny_count}")
    else:
        print("Invalid can't return negative currency.")


change_return()
