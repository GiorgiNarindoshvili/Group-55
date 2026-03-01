# 1

# def row_sum_odd_numbers(n):
#     return n ** 3


#2

# def flatten_and_sort(array):
#     list1 = []
#     for i in array:
#         for j in i:
#             list1.append(j)
#     return sorted(list1)


#3 

# def distinct(seq):
#     alldupls = []
    
    
#     for i in seq:
#         if i not in alldupls:
#             alldupls.append(i)
#     return alldupls



#4 


# def arithmetic(a, b, operator):
#     if operator == "add":
#         return a + b
#     if operator == "subtract":
#         return a - b
#     if operator == "divide":
#         return a / b
#     return a * b



#5


# def maskify(cc):
#     newstring = ''
#     for _ in cc[0:-4]:
#         newstring += '#'
#     for number in cc[-4:]:
#         newstring += number
#     return newstring