print("Hello and welcome to my Age Calculator.\n")

ask_for_name = input("What\'s your name?\n")

print("Well," + ask_for_name + "." + " Let\'s being shall we? \n")
user_input = input("Do you want your age in seconds (s) or hours (h)? ")

if user_input == 's':
  user_value = input("Enter the number of years you've lived for: ")
  print("You've lived for {} seconds".format(int(user_value) * 365 * 24 * 60 * 60 ))

elif user_input == 'h':
  user_value = input("Enter the number of years you've lived for: ")
  print("You've lived for {} hours".format(int(user_value) * 365 * 24 * 60 ))
