import re
import argparse

RE_FREQ = re.compile(r"^\d\s=\s(\d+(\.\d+)?)")


def decode_chunk(chunk):
    lines = [l.strip() for l in chunk.split("\n")]
    return decode_lines(lines)


def decode_lines(lines):
    result = {}
    frequencies = []
    result['Frequencies'] = frequencies
    for line in lines:

        if not line:
            continue

        k, _, r = line.rpartition(':')
        if k in ['Thought Box', 'UserName', 'Sent']:
            result[k] = r.strip()
            continue
    
        if line[0] in "123456":
            strf = RE_FREQ.search(line).groups()[0]
            frequencies.append(float(strf))

    return result


def split_input_into_lines(input):
    empty_line_count = 0
    accumulated = []
    for line in [l.strip() for l in input.split("\n")]:
        if line:
            accumulated.append(line)
            empty_line_count = 0
        else:
            empty_line_count += 1
            if empty_line_count > 1 and accumulated:
                yield accumulated
                accumulated = []
    if accumulated:
        yield accumulated


def format_output_line(input_dict):
    username = input_dict["UserName"]
    thought = input_dict["Thought Box"]
    frequencies = " ".join("%.1f" % f for f in input_dict['Frequencies'])
    return '''"{username}: {thought}", {frequencies};'''.format(
        username = username,
        thought = thought,
        frequencies = frequencies
        )

def make_parser():
    option_parser = argparse.ArgumentParser()
    option_parser.add_argument('input', help='input file')
    option_parser.add_argument('output', help='output file')
    return option_parser


def convert_data(input, output):
    with open(input) as inp_file:
        with open(output, 'w') as out_file:
            for lines in split_input_into_lines(inp_file.read()):
                ln = format_output_line(decode_lines(lines))
                out_file.write('%s\n' % ln)

def main():
    parser = make_parser().parse_args()
    convert_data(input=parser.input, output=parser.output)
