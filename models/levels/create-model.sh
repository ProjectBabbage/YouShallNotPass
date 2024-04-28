#!/bin/bash

# Check if the correct number of arguments is provided
if [ "$#" -ne 2 ]; then
    echo "Usage: $0 <modelname> <modelfilepath>"
    exit 1
fi

# Assign the first argument to modelname variable and second argument to modelfilepath variable
modelname="$1"
modelfilepath="$2"

# Call ollama create command with the assigned variables
ollama create "$modelname" "-f" "./$modelfilepath"