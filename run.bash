[ ! -d ./wordlists  ] && mkdir wordlists
rm score.json
for file in ./wordlists/*
do
    python romaticismAnalizer.py "$(basename -- "$file")" "${file}" score.json
done

for file in ./wordlists/*
do
    cat "${file}" >> .all.wordlist
done

python romaticismAnalizer.py all .all.wordlist score.json

rm .all.wordlist
