# 1. def divisors(integer):
#     divisor = 1
#     new_lst = []
#     if integer // integer == 1:
#         return f"{integer} is prime"
    
#     while divisor < integer:
#         division = integer // divisor
#         divisor += 1
#         new_lst.append(divisor)
#     return new_lst



#2 def solve(s):
    # upper = sum(1 for i in s if i.isupper())
    # lower = sum(1 for i in s if i.islower())
    
    # if upper == lower:
    #     return s.lower()
    # elif lower < upper:
    #     return s.upper()
    # return s.lower()



#3 def row_weights(array):
    # team1 = sum(array[0::2])
    # team2 = sum(array[1::2])
    
    # return(team1, team2)