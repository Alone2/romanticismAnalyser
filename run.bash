[ ! -d ./wordlists  ] && mkdir wordlists
rm score.json
for file in ./wordlists/*
do
    python romaticismAnalizer.py $(basename -- "$fullfile") "${file}" score.json
done
