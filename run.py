import os
from romaticismAnalizer import main, readfile, writefile

os.remove("score.json")

path = './wordlists'

files = os.listdir(path)

allf = ""

for f in files:
    k = readfile("./wordlists/" + f)
    allf += k
    main(f, "./wordlists/" + f, "score.json")

writefile(".all.wordlist", allf)
main("all", ".all.wordlist", "score.json")

os.remove(".all.wordlist")
