# Sequência de Fibonacci com python

# Atribuímos os três valores iniciais
[n1,n2, seqFibonacci] = [1,1,[1,1]]

lim = int(input("Determine quantos valores deseja obter da Sequência de Fibonacci: "))

for k in range(0, lim):
    soma = n1 + n2

    seqFibonacci.append(soma)

    n1 = n2

    n2 = soma
    
print(seqFibonacci)