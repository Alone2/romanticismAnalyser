[ ! -d ./wordlists  ] && mkdir wordlists
for file in ./wordlists/*
    python romanticismAnalyzer.py "${file}" ./wordlists/"${file}" score.json
