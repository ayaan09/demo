from django.shortcuts import render
import os
from django.http import HttpResponse
from subprocess import run

def my_view(request):
    script_directory = os.path.dirname(os.path.abspath(__file__))
    file1_path = os.path.join(script_directory, 'h.txt')
    file2_path = os.path.join(script_directory, 'file.txt')

    result = run(['python', 'C:/Users/Hanzalah Choudhury/Desktop/centroids-reid/od_matrix.py', file1_path, file2_path], capture_output=True, text=True)
    return HttpResponse(result.stdout)

def second(request):
    result = run(['python', 'C:/Users/Hanzalah Choudhury/Desktop/cpii_demo/backend/centroids-reid/main.py'], capture_output=True, text=True)
    return HttpResponse(result)