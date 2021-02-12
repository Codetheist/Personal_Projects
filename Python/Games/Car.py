# Create a command list if user enter help (either lowercase or uppercase)
# display:
# start - to start the car
# stop - to stop the car
# quit - to exit

# if they enter anything other than help
# display:
# invalid command.

# if the enter start
# start:
# car started.... Ready to go!

# if the enter stop
# stop:
# car stopped.

# if the enter quit
# quit:
# thanks for playing

user_command = ""

isCarStarted = False

while True:
    user_command = input("> ").lowercase()
    if user_command == "start":
        if isCarStarted:
            print("Car is already started!")
        else:
            isCarStarted = True
            print("Car started.... Ready to go!")
    elif user_command == "stop":
        if not isCarStarted:
            print("Car is already stopped!")
        else:
            isCarStarted = False
            print("Car stopped.")
    elif user_command == "help":
        print("""start - to start the car\n
        stop - to stop the car\n
        quit - to exit\n
        """)
    elif user_command == "quit":
        break
    else:
        print("Invalid command.")
