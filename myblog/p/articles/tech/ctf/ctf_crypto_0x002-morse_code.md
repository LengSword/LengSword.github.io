## **ctf_crypto_0x002-morse_code**
```python
#!/usr/bin/env/ python3
# -*- coding: utf-8 -*-
## 
#  @file ctf_crypto_0x002_morse_code.py
#  @brief Morse Code - Crypto
#  
#  @author LengSword
#  @email 1030588973@qq.com
#  @version 0.0.1
#  @date 2018/08/20
#  @license MIT
  
encoding_dict = {
    # --- letter ---
    'A' : '.-',     # A -> 01
    'B' : '-...',   # B -> 1000
    'C' : '-.-.',   # C -> 1010
    'D' : '-..',    # D -> 100
    'E' : '.',      # E -> 0
    'F' : '..-.',   # F -> 0010
    'G' : '--.',    # G -> 110
    'H' : '....',   # H -> 0000
    'I' : '..',     # I -> 00
    'J' : '.---',   # J -> 0111
    'K' : '-.-',    # K -> 101
    'L' : '.-..',   # L -> 0100
    'M' : '--',     # M -> 11
    'N' : '-.',     # N -> 10
    'O' : '---',    # O -> 111
    'P' : '.--.',   # P -> 0110
    'Q' : '--.-',   # Q -> 1101
    'R' : '.-.',    # R -> 010
    'S' : '...',    # S -> 000
    'T' : '-',      # T -> 1
    'U' : '..-',    # U -> 001
    'V' : '...-',   # V -> 0001
    'W' : '.--',    # W -> 011
    'X' : '-..-',   # X -> 1001
    'Y' : '-.--',   # Y -> 1011
    'Z' : '--..',   # Z -> 1100
    # --- number ---
    '0' : '-----',  # 0 -> 11111
    '1' : '.----',  # 1 -> 01111
    '2' : '..---',  # 2 -> 00111
    '3' : '...--',  # 3 -> 00011
    '4' : '....-',  # 4 -> 00001
    '5' : '.....',  # 5 -> 00000
    '6' : '-....',  # 6 -> 10000
    '7' : '--...',  # 7 -> 11000
    '8' : '---..',  # 8 -> 11100
    '9' : '----.',  # 9 -> 11110

    '-' : '-....-'  # - -> 100001
}

decoding_dict = {}

def _get_decoding_dict():
    for key, value in encoding_dict.items():
        decoding_dict[value] = key


class Morse_Code(object):
    
    def encrypt(ciphertext, separator="/"):
        result = ''
        
        ciphertext = ciphertext.upper()
        for letter in ciphertext:
            if letter in encoding_dict:
                result += encoding_dict[letter] + separator
        return result.rstrip("/")
    
    def decrypt(ciphertext, separator="/"):
        result = ''
        
        ciphertext = ciphertext.split(separator)
        for letter in ciphertext:
            if letter in decoding_dict:
                result += decoding_dict[letter]
        return result


if __name__ == '__main__':
    _get_decoding_dict()
    
    text = 'abd12'
    tmp=Morse_Code.encrypt(text)
    print('Text => ' + text)
    print('Code => ' + tmp)
    print('======')
    text = '..-. .-.. .- --. . --... .---- -.-. .- ..... -.-. -.. -....- --... -.. -... ----. -....- ....- -... .- ...-- -....- ----. ...-- ---.. ...-- -....- .---- .- ..-. ---.. -.... --... ---.. ---.. .---- ..-. ----- --...'
    tmp=Morse_Code.decrypt(text, " ").lower()
    print('Code => ' + text)
    print('Text => ' + tmp)
```