import pymongo
from collections import OrderedDict
import simplejson as json
import pprint

# Script Reads Json with more than 900 Allergens and Data about them and inserts them into the mongoDB
mongoDocker = pymongo.MongoClient("mongodb://localhost:37017/")
database = mongoDocker["allergens"]
collection = database["allergens"]

with open('allergens.json') as json_file:
    data = json.load(json_file)

for x in data:
    collection.insert_one(x)