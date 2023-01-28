# import the modules
from pydoc import html

import requests
from bs4 import BeautifulSoup
import csv
from itertools import zip_longest

# 2nd step : use request to fetch the URL
result = requests.get("https://wuzzuf.net/jobs/egypt")
# 3rd save the page content or markup
src = result.content
#print(src)

# 4th step : create a soup object to parse the content
#soup = BeautifulSoup(src, "lxml-xml")
soup = BeautifulSoup(src, html.parser)
print(soup)

# 5th step : find the elements containing the wanted infos
# ad_title, ad_category, ad_description, ad_price, ad_place,
ad_title = soup.find_all("h2", {"class": "css-m604qf"})  #dictionary key/value
print(ad_title)
ad_description = soup.find_all("a", {"class":"css-5x9pm1"})
#print(ad_description)