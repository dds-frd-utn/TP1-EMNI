import numpy as np

#Operaciones auxiliares
def Lc(i): #Sumatoria para el calculo de los Ci

def rx(i): #Sumatoria para el calculo de los Xi


#Método L-R

n = int(input("Introduce el orden de la matriz A: ")) #Introduzco la dimensión de A
A = np.zeros([n,n]) #Matriz a introducir
L = np.zeros([n,n]) #Matriz triangulada inferior
R = np.zeros([n,n]) #Matriz triangulada superiormente
c = np.zeros([n]) #Vector de coeficientes
x = np.zeros([n]) #Vector solución
lc = np.zeros([n]) #Vector auxiliar para el calculo de la sumatoria utilizando la funcion "sumatoria"


#Introduzco los elementos de la matriz A
input("Introduzca los valores de A")
for i in range(n):
    for j in range(n):
        A[i,j] = input("Elemento a["+str(i+1)+","+str(j+1)+"]: ")
        A[i,j] = float(A[i,j])

#Intruduzco los valores del vector de términos independientes
b = input("Introduce los términos independientes")) 
for i in range(n):
    b[i] = input("Elemento b["+str(i+1)+"]: ")
    b[i] = float(b[i])


#Empieza el método calculando L y R
for i in range(n):
    for j in range(i, n):
        L[j,i] = A[j,i]
        R[i,j] = A[i,j] / L[i,i]
    for j in range(i, n):
        for k in range(i, n):
            A[j,k] = A[j,k] - (L[j,i] * R[i,k])

#Asignación de los coeficientes c y luego los valores del vector solución x
c[0] = b[0] / L[0,0]
for i in range(1, dim):
    c[i] = (b[i] - Lc(i)) / L[i,i]
    x[n] = c[n]

for i in range (n - 1, 1, -1):
    x[i] = c[i] - 


print("Matriz A: ", A)
print("Matriz L: ", L)
print("Matriz R: ", R)
