def create_fib(num_remain, cur_num, last_num):
	if num_remain == 0:
		return cur_num + last_num
	else:
		return create_fib(num_remain-1, cur_num+last_num, cur_num)

print(create_fib(98, 1, 1))
