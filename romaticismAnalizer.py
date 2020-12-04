from urllib import request
import glob
import os.path
import time

FRANKENSTEIN_PATH = "frankenstein/"
FRANKENSTEIN_FILE = "frankenstein/Frankenstein Chapter 24.txt"
FRANKENSTEIN_URL = "http://www.gutenberg.org/files/84/84-0.txt"

def main():
    if not os.path.isfile(FRANKENSTEIN_FILE):
        # Download and set up Frankenstein
        setuptext()
    # Get letter / chapter paths
    letterspaths = glob.glob(FRANKENSTEIN_PATH + "*Letter*.txt")
    letterspaths.sort()
    chapterspaths = glob.glob(FRANKENSTEIN_PATH + "*Chapter*.txt")
    chapterspaths.sort()

    # put text of book in list 
    chaptersletters = []
    for k in letterspaths:
        chaptersletters.append(readfile(k))
    for k in chapterspaths:
        chaptersletters.append(readfile(k))

    # Example Usage
    # ====================
    # chaptersletters[0]   => Letter 1
    # chaptersletters[1]   => Letter 2
    # chaptersletters[n-1] => Letter n
    # ...
    # chaptersletters[4]   => Chapter 1
    # chaptersletters[5]   => Chapter 2
    # chaptersletters[n+3] => Chapter n
    # ...

    # print(chaptersletters[27])

def setuptext(output = True):
    if output:
        print("downloading data...", flush=True)

    # Mkdir
    if not os.path.isdir(FRANKENSTEIN_PATH):
        os.mkdir(FRANKENSTEIN_PATH)

    # Download
    out = getwebcontent(FRANKENSTEIN_URL)

    # Only save the book
    outS = out.split("\n")
    outS = outS[101:7421]
    out = ""
    for k in outS:
        out += k + "\n"

    # Formatting
    out = out.replace("â","\"")
    out = out.replace("â","\"")
    out = out.replace("â","-")
    out = out.replace("â","'")

    # Generate all chapters
    chapters = []
    for k in range(1, 5):
        chapters.append("Letter " + str(k) + "\r\n")
    for k in range(1, 25):
        chapters.append("Chapter " + str(k) + "\r\n")

    # Save every chaptre in a different file
    oldk = chapters[0]
    out = out.split(oldk)[1]
    for k in chapters[1:]:
        outS = out.split(k)
        if output:
            print("processing:", oldk[:-2], flush=True)
        out = outS[1]
        writefile(FRANKENSTEIN_PATH + "Frankenstein " + oldk[:7].strip() + " " +  str(int(oldk[7:-2])).zfill(2) + ".txt", outS[0])
        oldk = k
    newk = chapters[len(chapters)-1]
    writefile(FRANKENSTEIN_PATH + "Frankenstein " + newk[:7].strip() + " " +  str(int(k[7:-2])).zfill(2) + ".txt", out)

    if output:
        print("Frankenstein set up!", flush=True)

def getwebcontent(url):
    bit = request.urlopen(url).read()
    return bit.decode(encoding='utf-8')

def writefile(filename, data):
    print("wrote" , filename)
    f = open(filename, "w")
    f.write(data)
    f.close()

def readfile(filename):
    f = open(filename, "r")
    out = f.read()
    f.close()
    return out

if __name__ == "__main__":
    main()
