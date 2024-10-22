#!/bin/bash
COMDEX_PROTO_DIR="/comdex/proto"
INPUT_DIR="$COMDEX_PROTO_DIR/comdex"
OUTPUT_DIR="codec"
PROTO_DIR="$(pwd)" 

mkdir -p "$OUTPUT_DIR"

# Find all .proto files in the input directory and its subdirectories
find "$INPUT_DIR" -name "*.proto" | while read -r proto_file; do
    echo "Processing: $proto_file"
    protoc \
        --plugin="node_modules/.bin/protoc-gen-ts_proto" \
        --ts_proto_out="$OUTPUT_DIR" \
        --proto_path="$COMDEX_PROTO_DIR" \
        --proto_path="$INPUT_DIR" \
        --proto_path="$PROTO_DIR" \
        --ts_proto_opt="esModuleInterop=true,forceLong=long,useOptionals=messages" \
        "$proto_file"
done

echo "All .proto files processed."