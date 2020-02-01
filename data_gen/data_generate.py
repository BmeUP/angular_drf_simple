import os
from random import  choice, randint
import time
import  requests


size_file = os.path.getsize("/home/bme/Python Projects/data_generate/data_generate.py") 

def data_generate():
    alphabet_list =  ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    title_state = choice(alphabet_list) + choice(alphabet_list) + choice(alphabet_list) + "-StateTitle"
    code = randint(1, 10) + randint(10, 20) + randint(15, 43) 
    final_code = str(code) + "-StateCode"
    request_post = requests.post("http://localhost:8000/states/", data = {"title": title_state, "code": final_code})  


while True:
    data_generate()
    print(size_file)
    time.sleep(5)

