setmode -bscan
setCable -p auto
identify
assignfile -p 1 -file ./run_impact/main.bit
program -p 1
quit