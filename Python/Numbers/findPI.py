# Find PI to the Nth Digit
# Created by: Codetheist

"""
Description: This program finds PI to the Nth Digit
"""

# Importing the math module
import math

# Print title
print(f"****************************")
print(f"* Find PI to the Nth Digit *")
print(f"****************************")

# Creating a function to find PI to the Nth Digit


def findPI(n):
    # Creating an if statement to check if the user entered a number greater than 20
    if n > 20:
        # Printing an error message
        print(f"\nError: The number you entered is greater than 20")
    # Creating an else statement to check if the user entered a number less than or equal to 20
    else:
        # Finding PI to the Nth Digit
        pi = round(math.pi, n)
        # Returning the value of PI
        return pi

# Creating a function to print the value of PI


def printPI(n):
    # If the number ends in 1, print st
    if n % 10 == 1 and n != 10:
        print(f"\nThe value of PI to the {n}st digit is {findPI(n)}")
    # If the number ends in 2, print nd
    elif n % 10 == 2:
        print(f"\nThe value of PI to the {n}nd digit is {findPI(n)}")
    # If the number ends in 3, print rd
    elif n % 10 == 3:
        print(f"\nThe value of PI to the {n}rd digit is {findPI(n)}")
    else:
        # Printing the value of PI
        print(f"\nThe value of PI to the {n}th digit is {findPI(n)}")

# Creating a function to get the value of N


def getN():
    # Getting the value of N
    n = int(input(f"\nEnter the value of N: "))
    # Returning the value of N
    return n

# Creating a function to check if the user wants to continue


def checkContinue():
    # Getting the user's response
    response = input(f"\nDo you want to continue? (Y/N): ")
    # Returning the user's response
    return response

# Run the program


def main():
    # Creating a variable to ask if the user wants to continue
    continueProgram = "Y"
    # Creating a while loop to ask if the user wants to continue
    while continueProgram.capitalize() == "Y":
        # Getting the value of N
        n = getN()
        # Printing the value of PI
        printPI(n)
        # Asking if the user wants to continue
        continueProgram = checkContinue()
        # Creating an if statement to check if the user wants to continue
        if continueProgram.capitalize() == "N":
            # Printing a goodbye message
            print(f"\nGoodbye!")


# Calling the main function
if __name__ == '__main__':
    main()
