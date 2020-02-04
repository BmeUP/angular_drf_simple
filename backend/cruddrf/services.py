from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import State
from .serializers import StateSerializer


class AllStates(APIView):
    def get(self, requset, format=None):
        states_list = State.objects.all()
        serializer = StateSerializer(states_list, many=True)
        return Response(serializer.data)
    
    def post(self, request, format=None):
        serializer = StateSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)


class OneState(APIView):
    def get_state(self, request, pk):
        try:
            state = State.objects.get(pk=pk)
        except State.DoesNotExist:
            content = {"state": f'with {pk} id does not exist!'}
            return Response(content)
    
    def get(self, request, pk, format=None):
        state = self.get_state(pk)
        serializer = StateSerializer(state)
        return Response(serializer.data)
