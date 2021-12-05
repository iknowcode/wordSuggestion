class TrieNode:
    def __init__(self, char) -> None:
        self.char = char
        self.is_end = False
        #A map to store all 26 chars,  a list with 26 slots could also be used
        self.children = {}

class Trie(object):

    def __init__(self):
        self.root = TrieNode("")
        self.buildTrie()

    def buildTrie(self):
        with open("common_words/dictionary.txt","r") as file:
            word_count = 0
            print("Building trie..")
            for word in file:
                if(word!=""):
                    self.insert(word.replace("\n",""))
                    word_count+=1
        print("Trie built with total words : "+ str(word_count))

    def insert(self, word):
        curr_node = self.root

        for char in word:
            if char in curr_node.children:
                curr_node = curr_node.children[char]
            else:
                new_node = TrieNode(char)
                curr_node.children[char] = new_node
                curr_node = new_node
        curr_node.is_end = True
        
    def dfs(self, root, prefix, output):
        
        #Base Case
        if( root.is_end ):
            output.append( prefix )
            return

        for node in root.children.values():
            self.dfs(node, prefix+node.char, output)
        

    def search(self, word):
        curr_node = self.root
        output = []
        prefix = ""
        for char in word:
            if char in curr_node.children:
                curr_node = curr_node.children[char]
                prefix += char 
            else:
                return output
        
        self.dfs(curr_node,prefix, output)
        sorted(output)
        return output[:5]


