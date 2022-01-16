FROM python:3.8

RUN pip install --upgrade pip

# create non-root user
# RUN adduser -D pyuser
RUN useradd -ms /bin/bash pyuser
USER pyuser
WORKDIR /home/pyuser/code
# RUN mkdir -p /home/pyuser/code && chown -R pyuser:pyuser /home/pyuser/code

#dependancies
COPY --chown=pyuser:pyuser requirements.txt requirements.txt
RUN pip install --user -r requirements.txt

ENV PATH="/home/pyuser/.local/bin:${PATH}"
COPY --chown=pyuser:pyuser . .

EXPOSE 8002
CMD ["python", "main.py"]