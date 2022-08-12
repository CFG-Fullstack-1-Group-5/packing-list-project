import pytest
from flask import json
from src.backend.server import app

with open('./Unit_tests/json_test_file.json', 'r') as f:
    test_data = json.load(f)


@pytest.fixture(scope="module")
def client():
    with app.test_client() as client:
        yield client


def test_get_user_input(client):
    response = client.post(
        '/user_input',
        data=json.dumps(test_data),
        content_type='application/json',
    )

    data = json.loads(response.get_data(as_text=True))

    assert response.status_code == 200
    assert data['style'] == ['unisex']


def test_get_clothes(client):
    response = client.get('/clothes')
    data = json.loads(response.get_data(as_text=True))
    
    assert response.status_code == 200
    assert data['extras'] == ['wellies','raincoat','umbrella']


def test_get_display_information(client):
    response = client.get('/data')
    data = json.loads(response.get_data(as_text=True))

    assert response.status_code == 200
    assert data['dates']['startDate'] == '2022-08-21'
    
