# Tax Calculator - Asks the user to enter a cost and either a country or state tax.
# It then returns the tax plus the total cost with tax.
# Author: Codetheist
# Company: Codetheist, LLC
# Email: codetheist@codetheist.com

country = input("Enter country or currency abbreviation: ")
print("i.e. Unite State or USD or US")

def switch_country(country):
    country_list = {

    }


def tax_calculation():
    price = float(input("Enter price: "))

    tax_rate = float(input("Enter tax rate: ")) / 100

    tax_rate = price * tax_rate

    price_total = price + tax_rate

    print(f"Tax: ${round(tax_rate, 2)}")

    print(f"Total ${round(price_total, 2)}")


tax_calculation()
