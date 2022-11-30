# Find PI to the Nth Digit
# Created by: Codetheist

"""
Description: This program finds PI to the Nth Digit
"""

# Importing the math module
import math

# Print title
print("****************************")
print("* Find PI to the Nth Digit *")
print("****************************\n")

# Creating a function to find PI to the Nth Digit
def findPI(n):
    # Finding PI to the Nth Digit
    pi = round(math.pi, n)
    # Returning the value of PI
    return pi

# Creating a function to print the value of PI
def printPI(n):
    # Printing the value of PI
    print("The value of PI to the", n, "th digit is", findPI(n))

# Creating a function to get the value of N
def getN():
    # Getting the value of N
    n = int(input("Enter the value of N: "))
    # Returning the value of N
    return n

# Creating a function to check if the user wants to continue
def checkContinue():
    # Getting the user's response
    response = input("Do you want to continue? (Y/N): ")
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
            print("Goodbye!")


# Calling the main function
if __name__ == '__main__':
    main()